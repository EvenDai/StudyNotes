package com.itheima.dao;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.itheima.domain.Student;
import com.itheima.util.JaxpUtil;

public class StudentDaoImpl {
	/**
	 * <student idcard="333" examid="444">
		<name>����</name>
		<location>����</location>
		<grade>97</grade>
	</student>
	�ҽӵ���Ԫ����
	 * @param student
	 * @return
	 */
	public boolean addStudent(Student student) {
		boolean result = false;
		try{
			//1���õ�Document����
			Document document = JaxpUtil.getDocument();
			//2������studentԪ�أ�������������
			Element studentE = document.createElement("student");
			studentE.setAttribute("idcard", student.getIdcard());
			studentE.setAttribute("examid", student.getExamid());
			//3������name��location��gradeԪ�أ�����������������
			Element nameE = document.createElement("name");
			nameE.setTextContent(student.getName());
			
			Element locationE = document.createElement("location");
			locationE.setTextContent(student.getLocation());
			
			Element gradeE = document.createElement("grade");
			gradeE.setTextContent(student.getGrade()+"");
			//4����������֮��Ĺ�ϵ�����ҽӵ�examԪ����
			studentE.appendChild(nameE);
			studentE.appendChild(locationE);
			studentE.appendChild(gradeE);
			
			Node root = document.getElementsByTagName("exam").item(0);
			root.appendChild(studentE);
			//5��д��xml�ĵ���ȥ
			JaxpUtil.write2xml(document);
			result = true;
		}catch(Exception e){
			throw new RuntimeException(e);//�쳣ת�壬�쳣��
		}
		return result;
	}

	public Student queryStudent(String examid) {
		Student student = null;
		try{
			Document document = JaxpUtil.getDocument();
			NodeList list = document.getElementsByTagName("student");
			for(int i=0;i<list.getLength();i++){
				Element e = (Element)list.item(i);
				if(examid.equals(e.getAttribute("examid"))){
					//��������ѧ��
					student = new Student();
					student.setExamid(examid);
					student.setIdcard(e.getAttribute("idcard"));
					student.setName(e.getElementsByTagName("name").item(0).getTextContent());
					student.setLocation(e.getElementsByTagName("location").item(0).getTextContent());
					student.setGrade(Float.parseFloat(e.getElementsByTagName("grade").item(0).getTextContent()));
					break;
				}
			}
		}catch(Exception e){
			throw new RuntimeException(e);//�쳣ת�壬�쳣��
		}
		return student;
	}

	public boolean deleteStudent(String name) {
		boolean result = false;
		try{
			Document document = JaxpUtil.getDocument();
			NodeList list = document.getElementsByTagName("name");
			for(int i=0;i<list.getLength();i++){
				Node n = list.item(i);
				if(name.equals(n.getTextContent())){
					n.getParentNode().getParentNode().removeChild(n.getParentNode());
					JaxpUtil.write2xml(document);
					result = true;
					break;
				}
			}
		}catch(Exception e){
			throw new RuntimeException(e);//�쳣ת�壬�쳣��
		}
		return result;
	}
}
