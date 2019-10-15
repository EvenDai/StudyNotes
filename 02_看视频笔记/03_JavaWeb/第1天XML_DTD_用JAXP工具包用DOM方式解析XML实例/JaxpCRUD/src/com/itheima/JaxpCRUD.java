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
		//获取DOM解析器工厂，以便生产解析器
		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		//获取DOM解析器，以便解析DOM
		DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
		//解析DOM
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
//	1、得到某个具体的节点内容（如获取第二本书的作者名字（Text节点）
	private static void test01(Document document) throws Exception {
		
		NodeList list = document.getElementsByTagName("作者");
//		System.out.println(list.getLength());   //获取该节点列表中有几个节点
		Node node = list.item(1);
		String content = node.getTextContent();//获取主体内容
		System.out.println(content);
	}
//	2、遍历所有元素节点(如打印所有元素节点的名字（标签名）
	private static void test02(Node node) {
		if(node.ELEMENT_NODE==node.getNodeType())//判断节点是否是元素节点，如果是打印他的名字
			System.out.println(node.getNodeName());
		if(node.hasChildNodes()) {                	//判断是否有节点，如果则进行递归处理
			NodeList nodeList = node.getChildNodes();
			for(int i=0;i<nodeList.getLength();i++)
				test02(nodeList.item(i));
		}
	}
//	3、修改某个元素节点的主体内容（如修改第二本书的价格为88.00元）
	private static void test03(Document document) throws Exception {
		Node price = document.getElementsByTagName("售价").item(1);
		price.setTextContent("88.00元");//注，此处修改的是加载到内存中的Dom树中的节点，要想修改文件，还得写回文件去

		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));//把内存dom树转换为xml文件
	}
//	4、向指定元素节点中增加子元素节点(如在第一本书的售价前面插入<内部价>58.00元</内部价>）注：新增加的子节点在所有原子节点的最后面
	private static void test04(Document document) throws Exception {
		//创建一个元素，并设置主体内容
		Element innerPriceElement = document.createElement("内部价");
		innerPriceElement.setTextContent("12.00元");

		//上面只是创建了一个单独的节点，还需把该单独的节点增加到“书”节点中做为书的子节点		
		Node bookNode = document.getElementsByTagName("书").item(0); //获得第一个书节点
		bookNode.appendChild(innerPriceElement);
		 //把DOM写回XML文件
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
//	5、向指定元素节点上增加同级元素节点(如在第一本书的售价前面插入<批发价>10</批发价>)
	private static void test05(Document document) throws Exception{
		//创建新元素，并设置主体内容
		Element wholesaleElement = document.createElement("批发价");
		wholesaleElement.setTextContent("8元");
		//把新节点增加Dom树关系中
Node salePriceNode = document.getElementsByTagName("售价").item(0); //得到第一个售价节点
		salePriceNode.getParentNode().insertBefore(wholesaleElement, salePriceNode);//必须通过父节点来建立兄弟节点关系
		//把DOM写回XML文件
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
//	6、删除指定元素节点(如删除内部价)
	private static void test06(Document document) throws Exception {
		Node innerPriceNode = document.getElementsByTagName("内部价").item(0); //获得内部价节点
		//删除内部节点
		innerPriceNode.getParentNode().removeChild(innerPriceNode); //必须通过父节点来移除他的孩子
		//把DOM写回XML文件
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		transformer.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
//	7、获取XML文件属性(如获取第一个“书”的“大小”的属性值)
	private static void test07(Document document){
		Node bookNode = document.getElementsByTagName("书").item(0);
		Element bookElement = (Element)bookNode;
		String attrValue = bookElement.getAttribute("大小");
		System.out.println(attrValue);
	}
//	8、设置XML文件属性（如设置第一个“书”的“大小”的属性值）
	private static void test08(Document document) throws Exception{
		Node bookNode = document.getElementsByTagName("书").item(0);
		Element bookElement = (Element)bookNode;
		bookElement.setAttribute("大小","非常非常大");//如果属性已有则是修改，没有则增加
		
		TransformerFactory tf = TransformerFactory.newInstance();
		Transformer t = tf.newTransformer();
		t.transform(new DOMSource(document), new StreamResult("src/book.xml"));
	}
	
}
