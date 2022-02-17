package es.florida.servidorHTTP;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.net.InetSocketAddress;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

import com.sun.net.httpserver.HttpServer;

public class Servidor {

    public static void main(String[] args) throws Exception {
    	
    	System.out.println("Arranca el servidor");
    	
    	String rutaFicheroConfiguracion = args[0];  //Pasar como parametro la ruta del fichero de configuracion
    	File ficheroConfiguracion = new File(rutaFicheroConfiguracion);
    	FileReader fr = new FileReader(ficheroConfiguracion);
    	BufferedReader br = new BufferedReader(fr);
    	String host = br.readLine().split("=")[1];
    	System.out.println("IP: " + host);
    	int puerto = Integer.parseInt(br.readLine().split("=")[1]);
    	System.out.println("Puerto: " + puerto);
    	String rutaRespuesta = br.readLine().split("=")[1];   
    	System.out.println("Ruta contexto: " + rutaRespuesta);
    	
    	InetSocketAddress direccionTCPIP = new InetSocketAddress(host,puerto);
    	int backlog = Integer.parseInt(br.readLine().split("=")[1]); //Numero de conexiones pendientes que el servidor puede mantener en cola
    	HttpServer servidor = HttpServer.create(direccionTCPIP, backlog);
    	
    	GestorHTTP gestorHTTP = new GestorHTTP();   //Clase que gestionara los GETs, POSTs, etc.
    	servidor.createContext(rutaRespuesta, gestorHTTP);   //Crea un contexto, asocia la ruta al gestor HTTP
    	
    	int numThreads = Integer.parseInt(br.readLine().split("=")[1]);
    	ThreadPoolExecutor threadPoolExecutor = (ThreadPoolExecutor)Executors.newFixedThreadPool(numThreads);
    	servidor.setExecutor(threadPoolExecutor); 
    	
    	servidor.start();
    	System.out.println("Servidor HTTP arranca en el puerto " + puerto);
    	br.close();
    	
    }

}