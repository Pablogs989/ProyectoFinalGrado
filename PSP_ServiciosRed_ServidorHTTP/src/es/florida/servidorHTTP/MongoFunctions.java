package es.florida.servidorHTTP;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

//import org.apache.commons.codec
import org.apache.commons.codec.binary.Base64;
import java.util.ArrayList;
import java.util.Arrays;

import javax.imageio.ImageIO;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.json.JSONArray;
import org.json.JSONObject;

import com.mongodb.BasicDBObject;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

public class MongoFunctions {
	
//	MongoClient mongoClient = new MongoClient("localhost", 27017);
//	MongoCredential credential = new MongoCredential("user1", "password1", "test");

//	MongoClient mongoClient = new MongoClient(new ServerAddress(server), Arrays.asList(credential));

	String user = "superuser"; // the user name
	String databaseuser = "admin"; // the name of the database in which the user is defined
	char[] password = "12CaractersminiM.".toCharArray();
	
	MongoCredential credential = MongoCredential.createCredential(user, databaseuser, password);
	MongoClient mongoClient = new MongoClient(new ServerAddress("10.0.0.4", 27017),
	                                         Arrays.asList(credential));
	
	MongoDatabase database = mongoClient.getDatabase("Proyecte_Integrat");
	MongoCollection<Document> users = database.getCollection("users");
	MongoCollection<Document> documents = database.getCollection("documents");
	
	public ArrayList<String> authentication(JSONObject jo) {
		String email = jo.getString("email");
		String contrasenya = jo.getString("password");
		MongoCursor<Document> cursor = users.find().iterator();
		ArrayList<String> respuesta = new ArrayList<String>();
		while (cursor.hasNext()) {
			JSONObject obj = new JSONObject(cursor.next().toJson());
			if(obj.getString("email").equals(email)) {
				if(obj.getString("password").equals(contrasenya)) {
//					mongoClient.close();
					JSONObject id = new JSONObject(obj.get("_id").toString());
					System.out.println(id.getString("$oid"));
					respuesta.add("200");
					respuesta.add(id.getString("$oid"));
					return respuesta;
				}
			}
		}
//		mongoClient.close();
		respuesta.add("404");
		return respuesta;
	}
	
	public int checkEmail(JSONObject jo) {
		String email = jo.getString("email");
		MongoCursor<Document> cursor = users.find().iterator();
		while (cursor.hasNext()) {
			JSONObject obj = new JSONObject(cursor.next().toJson());
			if(obj.getString("email").equals(email)) {
				return 200;
			}
		}
		return 404;
	}
	
	public int createAuthentication(JSONObject jo) {
		String email = jo.getString("email");
		String contrasenya = jo.getString("password");
		Document doc = new Document();
		doc.append("email", email);
		doc.append("password", contrasenya);
		users.insertOne(doc);

		return 204;
	}
	
	public int createDocument(JSONObject jo) {
		String user_id = jo.getString("user_id");
		String doc_name = jo.getString("doc_name");
		String effective_date = jo.getString("effective_date");
		String profile = jo.getString("profile");
		String collection = jo.getString("collection");
		String img_base64 = jo.getString("img_base64");
		Document doc = new Document();
		doc.append("user_id", user_id);
		doc.append("doc_name", doc_name);
		doc.append("effective_date", effective_date);
		doc.append("profile", profile);
		doc.append("collection", collection);
		doc.append("img_url", "");
		
		documents.insertOne(doc);
		ObjectId id = (ObjectId)doc.get( "_id" );
		String img_url=id.toString();
		createImage(img_base64, img_url);
		documents.updateOne(
				 new BasicDBObject("_id", id),			 
				 new BasicDBObject("$set", new BasicDBObject("img_url", id.toString()))
			);
		

		return 204;
	}
	public void removeDocument(JSONObject jo) {
		documents.deleteOne(new Document("_id", new ObjectId(jo.getString("_id"))));
		try {
			File deletedImage = new File("C:\\xampp\\htdocs\\"+jo.getString("_id")+".jpg");
			deletedImage.delete();
		}catch(Exception e) {
			e.printStackTrace();
		}

//		return 204;
	}
	
	public void updateDocument(JSONObject jo) {
		documents.updateOne(
				 new BasicDBObject("_id", new ObjectId(jo.getString("_id"))),
				 new BasicDBObject("$set", new BasicDBObject("doc_name", jo.getString("doc_name")))
				 
				 
//				 new BasicDBObject("$set", new BasicDBObject("data_vigent", jo.getString("data_vigent")))
			);
		documents.updateOne(
				 new BasicDBObject("_id", new ObjectId(jo.getString("_id"))),			 
				 new BasicDBObject("$set", new BasicDBObject("effective_date", jo.getString("effective_date")))
			);
		documents.updateOne(
				 new BasicDBObject("_id", new ObjectId(jo.getString("_id"))),			 
				 new BasicDBObject("$set", new BasicDBObject("profile", jo.getString("profile")))
			);
		documents.updateOne(
				 new BasicDBObject("_id", new ObjectId(jo.getString("_id"))),			 
				 new BasicDBObject("$set", new BasicDBObject("collection", jo.getString("collection")))
			);
		if(!jo.getString("img_base64").equals("")) {
			System.out.println("yei");
			createImage(jo.getString("img_base64"), jo.getString("_id"));
		}
		
	}
	
	public void createImage(String base64, String imatge_url) {
		byte [] data = Base64.decodeBase64(base64);
	      ByteArrayInputStream bis = new ByteArrayInputStream(data);
	      
	      try {
	    	BufferedImage bImage2 = ImageIO.read(bis);
			ImageIO.write(bImage2, "jpg", new File("C:\\xampp\\htdocs\\"+imatge_url+".jpg"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@SuppressWarnings("null")
	public ArrayList<String> getDocuments(String id) {
		ArrayList<String> respuesta = new ArrayList<String>();
		String codigo="404";
		ArrayList<String> documentos = new ArrayList<String>();
		MongoCursor<Document> cursor = documents.find().iterator();
		while (cursor.hasNext()) {
			JSONObject obj = new JSONObject(cursor.next().toJson());
			if(obj.get("user_id").equals(id)) {
//				documentos+=obj.toString();
				documentos.add(obj.toString());
//				System.out.println(obj.toString());
				codigo="200";
			}
		}
		String[] documentosArr = new String[documentos.size()];
		documentosArr = documentos.toArray(documentosArr);
		String str = String.join(",", documentosArr);
		respuesta.add(codigo);
		
		respuesta.add("["+str+"]");
		
		return respuesta;
	}

}
