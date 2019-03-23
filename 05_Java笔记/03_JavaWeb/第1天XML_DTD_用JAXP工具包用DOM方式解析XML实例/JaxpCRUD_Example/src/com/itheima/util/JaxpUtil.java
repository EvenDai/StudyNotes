package com.itheima.util;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;

public class JaxpUtil {
	public static Document getDocument() throws Exception{
		DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();
		return db.parse("src/exam.xml");
	}
	public static void write2xml(Document document) throws Exception{
		Transformer ts = TransformerFactory.newInstance().newTransformer();
		ts.transform(new DOMSource(document), new StreamResult("src/exam.xml"));
	}
}
