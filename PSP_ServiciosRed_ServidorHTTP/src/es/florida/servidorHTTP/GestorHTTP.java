package es.florida.servidorHTTP;

import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class GestorHTTP implements HttpHandler {

	MongoFunctions MF = new MongoFunctions();

	@Override
	public void handle(HttpExchange httpExchange) throws IOException {

		// Habilitar accesos CORS (intercambio de recursos de origne cruzado) para
		// peticiones POST, PUT y DELETE
		httpExchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
		httpExchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		httpExchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type,Authorization");
		if (httpExchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) { // Caso PUT y DELETE se pide antes
																			// confirmacion desde cliente
			httpExchange.sendResponseHeaders(204, -1); // Codigo Ok, no devuelve contenido, preparado para POST, PUT o
														// DELETE
			return;
		}

		System.out.print("Peticion recibida: Tipo ");
		String requestParamValue = null;
		if ("GET".equalsIgnoreCase(httpExchange.getRequestMethod())) {
			System.out.println("GET");
			requestParamValue = handleGetRequest(httpExchange);
			handleGetResponse(httpExchange, requestParamValue);
		} else if ("POST".equalsIgnoreCase(httpExchange.getRequestMethod())) {
			System.out.println("POST");
			requestParamValue = handlePostRequest(httpExchange);
			handlePostResponse(httpExchange, requestParamValue);
		} else if ("PUT".equalsIgnoreCase(httpExchange.getRequestMethod())) {
			System.out.println("PUT");
			requestParamValue = handlePutRequest(httpExchange);
			handlePutResponse(httpExchange, requestParamValue);
		} else if ("DELETE".equals(httpExchange.getRequestMethod())) {
			System.out.println("DELETE");
			requestParamValue = handleDeleteRequest(httpExchange);
			handleDeleteResponse(httpExchange, requestParamValue);
		} else {
			System.out.println("DESCONOCIDA");
		}

	}

	// INICIO BLOQUE REQUEST

	private String handleGetRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo GET: " + httpExchange.getRequestURI().toString());
//		return httpExchange.getRequestURI().toString().split("\\?")[1].split("=")[1];
		return httpExchange.getRequestURI().toString().split("\\?")[1];
	}

	private String handlePostRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo POST: " + httpExchange.getRequestBody().toString());
		InputStream is = httpExchange.getRequestBody();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		StringBuilder sb = new StringBuilder();
		String line;
		try {
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	private String handlePutRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo PUT: " + httpExchange.getRequestBody().toString());
		InputStream is = httpExchange.getRequestBody();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		StringBuilder sb = new StringBuilder();
		String line;
		try {
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	private String handleDeleteRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo DELETE: " + httpExchange.getRequestBody().toString());
		InputStream is = httpExchange.getRequestBody();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		StringBuilder sb = new StringBuilder();
		String line;
		try {
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	// FIN BLOQUE REQUEST

	// INICIO BLOQUE RESPONSE

	private void handleGetResponse(HttpExchange httpExchange, String requestParamValue) throws IOException {

		System.out.println("El servidor pasa a procesar la peticion GET: " + requestParamValue);

		String[] typearr = requestParamValue.split("=");
		String type = typearr[0];
		String value = typearr[1];

		switch (type) {
		case "id":
			ArrayList<String> response = MF.getDocuments(value);
//				System.out.println(respuesta.get(0));
			String code = response.get(0);
			if (code.equals("200")) {
				OutputStream outputStream = httpExchange.getResponseBody();
				String htmlResponse = response.get(1);
				httpExchange.sendResponseHeaders(200, htmlResponse.length());
				outputStream.write(htmlResponse.getBytes());
				outputStream.flush();
				outputStream.close();
			} else {
				httpExchange.sendResponseHeaders(404, -1);

			}
			System.out.println("El servidor devuelve codigo: " + code);
			break;
		default:
			httpExchange.sendResponseHeaders(404, -1);
			System.out.println("El servidor devuelve codigo: " + 404);
			break;
		}

		// Ejemplo de respuesta: el servidor devuelve al cliente un HTML simple:
//		OutputStream outputStream = httpExchange.getResponseBody();
//        String htmlResponse = "<html><body><h1>Hola " + requestParamValue + "</h1></body></html>";
//		httpExchange.sendResponseHeaders(200, htmlResponse.length());
//        outputStream.write(htmlResponse.getBytes());
//        outputStream.flush();
//        outputStream.close();
//        System.out.println("Devuelve respuesta HTML: " + htmlResponse);

		// TODO: en vez del string htmlResponse anterior con la pagina web simple, se
		// podria incluir
		// en dicho string cualquier otro string (tipo JSON, por ejemplo) que el cliente
		// haya solicitado
		// a traves de la peticion Axios de Javascript. Por tanto, podria ser necesario
		// llamar desde este
		// este metodo a lo/s metodo/s necesario/s para acceder a una base de datos como
		// las que hemos
		// trabajado en el modulo de Acceso a Datos.

		// NOTA: se puede incluir tambien un punto de control antes de enviar el codigo
		// resultado de la
		// operacion en el header (httpExchange.sendResponseHeaders(CODIGOHTTP, {})).
		// Por ejemplo, si
		// hay un error se enviarian codigos del tipo 400, 401, 403, 404, etc.
		// https://developer.mozilla.org/es/docs/Web/HTTP/Status

	}

	private void handlePostResponse(HttpExchange httpExchange, String requestParamValue) throws IOException {

		System.out.println("El servidor pasa a procesar el body de la peticion POST: " + requestParamValue);
		JSONObject jo = new JSONObject(requestParamValue);
		String types = jo.getString("type");
		Integer response = 400;

		switch (types) {
		case "authentication":
			ArrayList<String> responsearr = MF.authentication(jo);
			System.out.println(responsearr.get(0));
			response = Integer.parseInt(responsearr.get(0));
			if(responsearr.size()>1) {
			String Response = responsearr.get(1);
			httpExchange.sendResponseHeaders(200, Response.length());
			OutputStream outputStream = httpExchange.getResponseBody();
			outputStream.write(Response.getBytes());
			outputStream.flush();
			outputStream.close();
			System.out.println("Devuelve respuesta: " + Response);
			} else {
				httpExchange.sendResponseHeaders(404, -1);
			}

			break;
		case "checkEmail":
			response = MF.checkEmail(jo);
			httpExchange.sendResponseHeaders(response, -1);
			System.out.println("El servidor devuelve codigo " + response);
			break;
		case "createAuthentication":
			response = MF.createAuthentication(jo);
			httpExchange.sendResponseHeaders(response, -1);
			System.out.println("El servidor devuelve codigo " + response);
			break;
		case "createDocument":
			response = MF.createDocument(jo);
			httpExchange.sendResponseHeaders(response, -1);
			System.out.println("El servidor devuelve codigo " + response);
			break;
			
		default:
			httpExchange.sendResponseHeaders(404, -1);
			System.out.println("El servidor devuelve codigo: " + 404);
			break;
		}

//		System.out.println(resposta);

		// Opcion 1: si queremos que el servidor devuelva al cliente un HTML:
		// OutputStream outputStream = httpExchange.getResponseBody();
		// String htmlResponse = "Parametro/s POST: " + requestParamValue + " -> Se
		// procesara por parte del servidor";
		// outputStream.write(htmlResponse.getBytes());
		// outputStream.flush();
		// outputStream.close();
		// System.out.println("Devuelve respuesta HTML: " + htmlResponse);
		// httpExchange.sendResponseHeaders(200, htmlResponse.length());
		// System.out.println("Devuelve respuesta HTML: " + htmlResponse);

		// Opcion 2: el servidor devuelve al cliente un codigo de ok pero sin contenido
		// HTML
//		httpExchange.sendResponseHeaders(resposta, -1);
//		System.out.println("El servidor devuelve codigo "+resposta);

		// TODO: a partir de aqui todas las operaciones que se quieran programar en el
		// servidor cuando recibe
		// una peticion POST (ejemplo: insertar en una base de datos lo que nos envia el
		// cliente en requestParamValue)

		// NOTA: se puede incluir tambien un punto de control antes de enviar el codigo
		// resultado de la
		// operacion en el header (httpExchange.sendResponseHeaders(CODIGOHTTP, {})).
		// Por ejemplo, si
		// hay un error se enviarian codigos del tipo 400, 401, 403, 404, etc.
		// https://developer.mozilla.org/es/docs/Web/HTTP/Status

	}

	private void handlePutResponse(HttpExchange httpExchange, String requestParamValue) throws IOException {

		System.out.println("El servidor pasa a procesar el body de la peticion PUT: " + requestParamValue);
		JSONObject jo = new JSONObject(requestParamValue);
		String type = jo.getString("type");
		switch(type) {
		case "updateDocument": MF.updateDocument(jo);
		break;
		}

		// Opcion 1: si queremos que el servidor devuelva al cliente un HTML:
		// OutputStream outputStream = httpExchange.getResponseBody();
		// String htmlResponse = "Parametro/s PUT: " + requestParamValue + " -> Se
		// procesara por parte del servidor";
		// outputStream.write(htmlResponse.getBytes());
		// outputStream.flush();
		// outputStream.close();
		// System.out.println("Devuelve respuesta HTML: " + htmlResponse);
		// httpExchange.sendResponseHeaders(200, htmlResponse.length());
		// System.out.println("Devuelve respuesta HTML: " + htmlResponse);

		// Opcion 2: el servidor devuelve al cliente un codigo de ok pero sin contenido
		// HTML
		httpExchange.sendResponseHeaders(204, -1);
		System.out.println("El servidor devuelve codigo 204");

		// TODO: a partir de aqui todas las operaciones que se quieran programar en el
		// servidor cuando recibe
		// una peticion PUT (ejemplo: actualizar en una base de datos lo que nos envia
		// el cliente en requestParamValue)

		// NOTA: se puede incluir tambien un punto de control antes de enviar el codigo
		// resultado de la
		// operacion en el header (httpExchange.sendResponseHeaders(CODIGOHTTP, {})).
		// Por ejemplo, si
		// hay un error se enviarian codigos del tipo 400, 401, 403, 404, etc.
		// https://developer.mozilla.org/es/docs/Web/HTTP/Status

	}

	private void handleDeleteResponse(HttpExchange httpExchange, String requestParamValue) throws IOException {

		System.out.println("El servidor pasa a procesar el body de la peticion DELETE: " + requestParamValue);
		JSONObject jo = new JSONObject(requestParamValue);
		String type = jo.getString("type");
		switch(type) {
		case "removeDocument": MF.removeDocument(jo);
		break;
		}
		// Opcion 1: si queremos que el servidor devuelva al cliente un HTML:
		// OutputStream outputStream = httpExchange.getResponseBody();
		// String htmlResponse = "Parametro/s DELETE: " + requestParamValue + " -> Se
		// procesara por parte del servidor";
		// outputStream.write(htmlResponse.getBytes());
		// outputStream.flush();
		// outputStream.close();
		// System.out.println("Devuelve respuesta HTML: " + htmlResponse);
		// httpExchange.sendResponseHeaders(200, htmlResponse.length());
		// System.out.println("Devuelve respuesta HTML: " + htmlResponse);

		// Opcion 2: el servidor devuelve al cliente un codigo de ok pero sin contenido
		// HTML
		
		
		httpExchange.sendResponseHeaders(204, -1);
		System.out.println("El servidor devuelve codigo 204");

		// TODO: a partir de aqui todas las operaciones que se quieran programar en el
		// servidor cuando recibe
		// una peticion DELETE (ejemplo: borrar de una base de datos lo que nos indica
		// el cliente en requestParamValue)

		// NOTA: se puede incluir tambien un punto de control antes de enviar el codigo
		// resultado de la
		// operacion en el header (httpExchange.sendResponseHeaders(CODIGOHTTP, {})).
		// Por ejemplo, si
		// hay un error se enviarian codigos del tipo 400, 401, 403, 404, etc.
		// https://developer.mozilla.org/es/docs/Web/HTTP/Status

	}

	// FIN BLOQUE RESPONSE

}
