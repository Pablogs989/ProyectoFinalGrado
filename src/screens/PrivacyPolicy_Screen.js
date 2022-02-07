import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { Appbar, Caption, Button, Headline, Paragraph, Surface, Provider, Subheading, Text, Title } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';


const LogIn_Screen = ({ navigation }) => {
    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigation.navigate("Welcome_Screen")} titulo="Politica de privacitat" />
            <View style={styles.box}>
                <Surface style={styles.falseCard}>
                    <ScrollView>
                        <Title>
                            Recogida y tratamiento de datos de carácter personal
                        </Title>
                        <Text style={styles.text}>
                            Los datos de carácter personal son los que pueden ser utilizados para
                            identificar a una persona o ponerse en contacto con ella.

                            “Travel Docs” puede solicitar datos personales de usuarios al acceder a
                            aplicaciones de la empresa o de otras empresas afiliadas así como la
                            posibilidad de que entre estas empresas puedan compartir esos datos
                            para mejorar los productos y servicios ofrecidos. Si no se facilitan esos
                            datos personales, en muchos casos no podremos ofrecer los productos o
                            servicios solicitados.

                            Estos son algunos ejemplos de las categorías de datos de carácter
                            personal que “Travel Docs” puede recoger y la finalidad para los que
                            puede llevar a cabo el tratamiento de estos datos.
                        </Text>
                        <Title>
                            ¿Qué datos de carácter personal se pueden recopilar?
                        </Title>
                        <Text style={styles.text}>
                            <View>
                                <Text style={styles.text}>
                                    ● Al crear un ID, solicitar un crédito comercial, comprar un producto,
                                    descargar una actualización de software, se recopilan diferentes
                                    datos, como nombre, dirección postal, número de teléfono,
                                    dirección de correo electrónico o los datos de la tarjeta de crédito.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.text}>
                                    ● Cuando se comparten contenidos con familiares y amigos o se
                                    invita a otras personas a participar en los servicios o foros,
                                    pueden recogerse los datos que facilitamos sobre esas personas,
                                    como su nombre, domicilio, correo electrónico y número de
                                    teléfono. Se utilizarán dichos datos para completar sus pedidos,
                                    mostrarle el producto o servicio correspondiente o para combatir
                                    el fraude.
                                </Text>
                            </View>
                        </Text>
                        <Title>
                            Propósito del tratamiento de datos de carácter personal
                        </Title>
                        <Text style={styles.text}>
                            <View>
                                <Text style={styles.text}>
                                    “Travel Docs” podrá utilizar los datos personales recabados para:
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.text}>
                                    ● Los datos de carácter personal recopilados permiten mantenerle
                                    informado acerca de los últimos productos, las actualizaciones
                                    de software disponibles y los próximos eventos.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.text}>
                                    ● También se utilizan los datos de carácter personal como ayuda
                                    para elaborar, perfeccionar, gestionar,
                                    proporcionar y mejorar los productos, servicios, contenidos y
                                    publicidad, y con el propósito de evitar pérdidas y fraudes.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.text}>
                                    ● Pueden utilizarse los datos de carácter personal para
                                    comprobar la identidad, colaborar en la identificación de
                                    usuarios y decidir los servicios apropiados.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.text}>
                                    ● También se utilizan esos datos de carácter personal
                                    con propósitos internos, incluyendo auditorías, análisis de datos
                                    y sondeos, para mejorar los productos, servicios y
                                    comunicaciones a clientes.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.text}>
                                    ● Si participa en un sorteo, un concurso o una promoción, pueden
                                    usarse los datos proporcionados para administrar estos
                                    programas.
                                </Text>
                            </View>
                        </Text>
                        <Title>
                            Recopilación y tratamiento de datos de carácter no
                            personal
                        </Title>
                        <View>
                            <Text style={styles.text}>
                                “Travel Docs” también recopilará datos de un modo que, por sí
                                mismos, no pueden ser asociados directamente a una persona
                                determinada. Estos datos de carácter no personal se pueden recopilar,
                                tratar, transferir y publicar con cualquier intención. Estos son algunos
                                ejemplos de las clases de datos de carácter no personal que
                                “Travel Docs” puede recopilar y los fines para los que se realiza su
                                tratamiento:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.text}>
                                ● Datos tales como profesión, idioma, código postal, identificador
                                único de dispositivo, etc. para comprender mejor la conducta de
                                nuestros clientes y mejorar nuestros productos, servicios y
                                anuncios publicitarios.
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.text}>
                                ● Datos sobre cómo se usan determinados servicios, incluidas las
                                consultas de búsqueda. Esta información se puede utilizar para
                                incrementar la importancia de los resultados que aportan los
                                servicios ofrecidos.
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.text}>
                                ● Datos sobre cómo usa su dispositivo y las aplicaciones para
                                facilitar a los desarrolladores la mejora de esas aplicaciones.
                                Si juntamos datos de carácter no personal con datos personales, los
                                datos mezclados serán tratados como datos personales mientras sigan
                                estando combinados.
                            </Text>
                        </View>
                        <Title>
                            Divulgación a terceros
                        </Title>
                        <Text style={styles.text}>
                            Ocasionalmente “Travel Docs” puede facilitar determinados datos de
                            carácter personal a socios estratégicos que trabajen con nosotros para
                            proveer productos y servicios o nos ayudan en nuestras actividades de
                            marketing. No se compartirán los datos con ningún tercero para sus
                            propios fines de marketing.
                        </Text>
                        <Title>
                            Proveedores de servicios
                        </Title>
                        <Text style={styles.text}>
                            “Travel Docs” compartirá datos de carácter personal con empresas que
                            se ocupan, entre otras actividades, de prestar servicios de tratamiento
                            de datos, conceder créditos, tramitar pedidos de clientes, presentar sus
                            productos, mejorar datos de clientes, suministrar servicios de atención al
                            cliente, evaluar su interés en productos y servicios y realizar
                            investigaciones sobre clientes o su grado de satisfacción.
                        </Text>
                        <Title>
                            Otros terceros
                        </Title>
                        <Text style={styles.text}>
                            Es posible que “Travel Docs” divulgue datos de carácter personal
                            por mandato legal, en el marco de un proceso judicial o por petición de
                            una autoridad pública, tanto dentro como fuera de su país de residencia.
                            Igualmente se puede publicar información personal si es necesaria o
                            conveniente por motivos de seguridad nacional, para acatar la legislación
                            vigente o por otras razones relevantes de orden público.
                        </Text>
                        <Title>
                            Protección de datos de carácter personal
                        </Title>
                        <Text style={styles.text}>
                            “Travel Docs” garantizará la protección de los datos personales
                            mediante cifrado durante el tránsito y, los alojados en instalaciones,
                            con medidas de seguridad físicas.
                            Al usar ciertos productos, servicios o aplicaciones o al publicar
                            opiniones en foros, salas de chat o redes sociales, el contenido y los
                            datos de carácter personal que se comparta serán visible para otros
                            usuarios, que tendrán la posibilidad de leerlos, compilarlos o usarlos.
                            Usted será responsable de los datos de carácter personal que
                            distribuya o proporcione en estos casos.
                        </Text>
                        <Title>
                            Integridad y conservación de datos de carácter personal
                        </Title>
                        <Text style={styles.text}>
                            “Travel Docs” garantizará la exactitud y la calidad de los datos
                            personales, se conservarán durante el tiempo necesario para cumplir los
                            fines para los que fueron recabados, salvo que la ley exija conservarlos
                            durante más tiempo.
                        </Text>
                        <Title>
                            Acceso a los datos de carácter personal
                        </Title>
                        <Text style={styles.text}>
                            Respecto a los datos de carácter personal que conservamos,
                            “Travel Docs” le ofrece acceso a ellos para cualquier fin, incluyendo las
                            solicitudes de rectificación en caso de que sean incorrectos o de
                            eliminación en caso de no estar obligados a conservarlos por imperativo
                            legal o por razones legítimas de negocio. Nos reservamos el derecho a
                            no tramitar aquellas solicitudes que sean improcedentes o vejatorias,
                            que pongan en riesgo la privacidad de terceros, que resulten inviables o
                            para las que la legislación local no exija derecho de acceso. Las
                            solicitudes de acceso, rectificación o eliminación podrán enviarse a
                            nuestra dirección XXDIRECCIONXX o en la cuenta de correo electrónico
                            XXMAILXX.
                        </Text>
                        <Title>
                            Niños y educación
                        </Title>
                        <Text style={styles.text}>
                            “Travel Docs” es consciente de la necesidad de establecer precauciones
                            adicionales para preservar la privacidad y la seguridad de los menores
                            que utilizan las aplicaciones y exigir consentimiento de sus progenitores
                            en caso de que no tengan la edad mínima exigida por la legislación (en
                            España, 14 años).
                            Si se han recopilado datos personales de un menor de 14 años, sin el
                            consentimiento necesario, se debe eliminar esa información lo antes
                            posible.
                        </Text>
                        <Title>
                            Servicios de localización
                        </Title>
                        <Text style={styles.text}>
                            Para prestar servicios de localización “Travel Docs”  podrá reunir,
                            utilizar y compartir datos exactos sobre ubicaciones, incluyendo la
                            situación geográfica en tiempo real de su ordenador o de su dispositivo.
                            Salvo que nos den su consentimiento, estos datos de localización se
                            recogen de manera anónima de forma que no pueden utilizarse para
                            identificarlo personalmente, y son usados para suministrar y mejorar sus
                            productos y servicios de localización.
                        </Text>
                        <Title>
                            Páginas web y servicios de terceros
                        </Title>
                        <Text style={styles.text}>
                            Las aplicaciones pueden contener enlaces a páginas web, productos y
                            servicios de terceros. También pueden utilizar u ofrecer productos o
                            servicios de terceros. La recogida de datos por parte de terceros,
                            introduciendo de datos sobre ubicaciones geográficas o datos de
                            contacto, se guiará por sus respectivas políticas de privacidad. Le
                            recomendamos consultar las políticas de privacidad de esos terceros.
                        </Text>
                    </ScrollView>



                </Surface>
            </View>
        </Provider>
    );
}

export default LogIn_Screen;


const styles = StyleSheet.create({
    text: {
        padding: 15,
        textAlign: 'justify'
    },

    title: {
        padding: 10
    },

    box: {
        flex: 1,
        backgroundColor: '#26528C',
        height: Dimensions.get("screen").height,
        alignItems: "center"
    },

    falseCard: {
        backgroundColor: '#A7CAD9',
        borderRadius: 20,
        height: Dimensions.get("screen").height * 81 / 100,
        width: Dimensions.get("screen").width * 90 / 100,
        marginTop: Dimensions.get("screen").height * 2 / 100,
        padding: 10
    }
})