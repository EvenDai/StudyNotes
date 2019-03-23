package com.itheima;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;

public class JaxpCRUD {
	public static void main(String[] args) throws Exception {
		//��ȡDOM�������������Ա�����������
		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		//��ȡDOM���������Ա����DOM
		DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
		//����DOM
		Document document = documentBuilder.parse("src/book.xml");
		test01(document);
//		test02(document);
//		test03(document);
//		test04(document);
//		test05(document);
//		test06(document);
//		test07(document);
//		test08(document);
	}
//	1���õ�ĳ������Ľڵ����ݣ����ȡ�ڶ�������������֣�Text�ڵ㣩
	private static void test01(Document document) throws Exception {
		
		NodeList list = document.getElementsByTagName("����");
//		System.out.println(list.getLength());   //��ȡ�ýڵ��б����м����ڵ�
		Node node = list.item(1);
		String content = node.getTextContent();//��ȡ��������
		System.out.println(content);
	}
//	2����������Ԫ�ؽڵ�(���ӡ����Ԫ�ؽڵ�����֣���ǩ����
	private static void test02(Node node) {
		if(node.ELEMENT_NODE==node.getNodeType())//�жϽڵ��Ƿ���Ԫ�ؽڵ㣬����Ǵ�ӡ��������
			System.out.println(node.getNodeName());
		if(node.hasChildNodes()) {                	//�ж��Ƿ��нڵ㣬�������еݹ鴦��
			NodeList nodeList = node.getChildNodes();
			for(int i=0;i<nodeList.getLength();i++)
				test02(nodeList.item(i));
		}
	}
//	3���޸�ĳ��Ԫ�ؽڵ���������ݣ����޸ĵڶ�����ļ۸�Ϊ88.00Ԫ��
	private static void test03(Document document) throws Exception {
		Node price = document.getElementsByTagName("�ۼ�").item(1);
		price.setTextContent("88.00Ԫ");//ע���˴��޸ĵ��Ǽ��ص��ڴ��е�Dom���еĽڵ㣬Ҫ���޸��ļ�������д���ļ�ȥ

		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));//���ڴ�dom��ת��Ϊxml�ļ�
	}
//	4����ָ��Ԫ�ؽڵ���������Ԫ�ؽڵ�(���ڵ�һ������ۼ�ǰ�����<�ڲ���>58.00Ԫ</�ڲ���>��ע�������ӵ��ӽڵ�������ԭ�ӽڵ�������
	private static void test04(Document document) throws Exception {
		//����һ��Ԫ�أ���������������
		Element innerPriceElement = document.createElement("�ڲ���");
		innerPriceElement.setTextContent("12.00Ԫ");

		//����ֻ�Ǵ�����һ�������Ľڵ㣬����Ѹõ����Ľڵ����ӵ����顱�ڵ�����Ϊ����ӽڵ�		
		Node bookNode = document.getElementsByTagName("��").item(0); //��õ�һ����ڵ�
		bookNode.appendChild(innerPriceElement);
		 //��DOMд��XML�ļ�
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
//	5����ָ��Ԫ�ؽڵ�������ͬ��Ԫ�ؽڵ�(���ڵ�һ������ۼ�ǰ�����<������>10</������>)
	private static void test05(Document document) throws Exception{
		//������Ԫ�أ���������������
		Element wholesaleElement = document.createElement("������");
		wholesaleElement.setTextContent("8Ԫ");
		//���½ڵ�����Dom����ϵ��
Node salePriceNode = document.getElementsByTagName("�ۼ�").item(0); //�õ���һ���ۼ۽ڵ�
		salePriceNode.getParentNode().insertBefore(wholesaleElement, salePriceNode);//����ͨ�����ڵ��������ֵܽڵ��ϵ
		//��DOMд��XML�ļ�
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
//	6��ɾ��ָ��Ԫ�ؽڵ�(��ɾ���ڲ���)
	private static void test06(Document document) throws Exception {
		Node innerPriceNode = document.getElementsByTagName("�ڲ���").item(0); //����ڲ��۽ڵ�
		//ɾ���ڲ��ڵ�
		innerPriceNode.getParentNode().removeChild(innerPriceNode); //����ͨ�����ڵ����Ƴ����ĺ���
		//��DOMд��XML�ļ�
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
//	7����ȡXML�ļ�����(���ȡ��һ�����顱�ġ���С��������ֵ)
	private static void test07(Document document){
		Node bookNode = document.getElementsByTagName("��").item(0);
		Element bookElement = (Element)bookNode;
		String attrValue = bookElement.getAttribute("��С");
		System.out.println(attrValue);
	}
//	8������XML�ļ����ԣ������õ�һ�����顱�ġ���С��������ֵ��
	private static void test08(Document document) throws Exception{
		Node bookNode = document.getElementsByTagName("��").item(0);
		Element bookElement = (Element)bookNode;
		bookElement.setAttribute("��С","�ǳ��ǳ���");//����������������޸ģ�û��������
		
		TransformerFactory tf = TransformerFactory.newInstance();
		Transformer t = tf.newTransformer();
		t.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
	
}
