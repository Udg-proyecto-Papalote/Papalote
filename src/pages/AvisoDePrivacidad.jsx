import { DialogContent, DialogTitle, Modal, ModalDialog } from '@mui/joy'

const AvisoDePrivacidad = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
                        <ModalDialog>
                <DialogTitle>Aviso de Privacidad</DialogTitle>
                <DialogContent>
                    <h2>Política de Privacidad de Papalote</h2>
                    <p>
                        En Papalote, valoramos y protegemos la privacidad de nuestros usuarios. Este aviso de privacidad explica de forma detallada cómo recopilamos, utilizamos, almacenamos y protegemos la información que nos proporcionas a través de nuestra aplicación, cuyo objetivo es ayudarte a mejorar tu expresión verbal mediante un diagnóstico inteligente. Al utilizar Papalote, aceptas los términos y condiciones de esta política de privacidad.
                    </p>

                    <h3>1. Recolección de Información</h3>
                    <p>
                        En Papalote, recopilamos audios proporcionados voluntariamente por los usuarios para realizar diagnósticos de mejora en la expresión verbal. Estos audios se graban y almacenan temporalmente en nuestra base de datos. La recolección se realiza exclusivamente con fines de análisis y desarrollo de recomendaciones que puedan beneficiar tu comunicación oral. 
                    </p>
                    <p>
                        Cabe destacar que Papalote no recopila otros tipos de datos personales, como nombres, direcciones de correo electrónico o información financiera. Tampoco solicitamos información sensible relacionada con tu salud o historial médico, dado que no brindamos servicios terapéuticos o médicos. Nuestro enfoque es estrictamente técnico y se limita a ofrecer recomendaciones basadas en el uso de técnicas de análisis de voz y lingüística computacional.
                    </p>

                    <h3>2. Uso de la Información</h3>
                    <p>
                        Los audios recopilados tienen como único fin la generación de diagnósticos y recomendaciones para mejorar la expresión verbal. Los audios son procesados mediante algoritmos diseñados específicamente para detectar patrones en la entonación, pronunciación, ritmo y claridad del habla, lo cual permite a Papalote ofrecer sugerencias personalizadas en función de los resultados del análisis.
                    </p>
                    <p>
                        Papalote no utiliza los datos recopilados para otros fines ajenos al diagnóstico de expresión verbal. No compartimos, vendemos ni alquilamos esta información a terceros para fines comerciales o de marketing sin tu consentimiento expreso. Nuestra misión es únicamente ofrecer una herramienta de apoyo para la mejora de la comunicación.
                    </p>

                    <h3>3. Almacenamiento y Eliminación de Datos</h3>
                    <p>
                        Los audios recopilados son almacenados de manera segura en nuestros servidores durante un periodo máximo de 30 días. Este tiempo permite que nuestro sistema procese la información y genere recomendaciones precisas para el usuario. Después de transcurrido este periodo, los audios son eliminados de forma automática y permanente de nuestros sistemas para proteger la privacidad y limitar el acceso a la información almacenada.
                    </p>
                    <p>
                        La política de retención de datos de Papalote es estricta. No conservamos copias de los audios más allá del periodo establecido, y el sistema de eliminación automática está configurado para garantizar que los datos se borren de manera segura y completa. Esta política aplica a todos los usuarios, sin excepción, y es revisada regularmente para garantizar que cumpla con las mejores prácticas en privacidad y protección de datos.
                    </p>

                    <h3>4. Seguridad y Protección de Datos</h3>
                    <p>
                        La seguridad de tus datos es una prioridad para Papalote. Implementamos una serie de medidas de seguridad, incluyendo encriptación avanzada y control de acceso, para garantizar que la información almacenada esté protegida contra accesos no autorizados, alteración, divulgación o destrucción. Solo el personal autorizado y capacitado de Papalote tiene acceso a los datos almacenados, y dicho acceso se concede únicamente para fines de mantenimiento y mejora de nuestros sistemas.
                    </p>

                    <h3>5. Derechos del Usuario</h3>
                    <p>
                        Como usuario de Papalote, tienes derecho a acceder, modificar o solicitar la eliminación de tus datos personales en cualquier momento. La información que recopilamos incluye tu nombre, género y los audios que proporcionas, los cuales son esenciales para ofrecerte un diagnóstico personalizado y preciso. Los audios se almacenan de forma temporal y se eliminan automáticamente después de 30 días, mientras que otros datos personales se conservan para mantener el historial de diagnósticos y mejorar la calidad del servicio.
                    </p>                    
                    <p>
                    
                    Si deseas ejercer tus derechos sobre tus datos, puedes contactarnos a través de los canales de soporte de Papalote. Te atenderemos de manera oportuna y sin costo adicional, y estaremos disponibles para resolver cualquier inquietud sobre la precisión o utilidad de los diagnósticos proporcionados.
                    
                    </p>

                    <h3>6. Cambios en la Política de Privacidad</h3>
                    <p>
                        Papalote se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en nuestras prácticas o en las normativas legales aplicables. Si realizamos cambios importantes, te informaremos a través de una notificación en la aplicación o mediante un correo electrónico, si has proporcionado uno en un contexto específico.
                    </p>
                    <p>
                        Recomendamos a nuestros usuarios revisar esta Política de Privacidad periódicamente para mantenerse informados sobre cómo protegemos y gestionamos sus datos. Tu uso continuado de Papalote después de cualquier modificación en esta política implica tu aceptación de los cambios realizados.
                    </p>

                    <h3>7. Contacto</h3>
                    <p>
                        Si tienes preguntas, comentarios o inquietudes sobre nuestra Política de Privacidad o el manejo de tus datos, no dudes en ponerte en contacto con el equipo de Papalote. Estamos comprometidos a ofrecerte un servicio de calidad y a resolver cualquier duda sobre el tratamiento de tu información personal.
                    </p>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}

export default AvisoDePrivacidad
