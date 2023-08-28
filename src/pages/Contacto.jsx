import MapboxCard from '../components/MapboxCard';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Contacto = () => {
  const [buttonState, setButtonState] = useState('Enviar Mensaje');

  const formik = useFormik({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      user_name: '', //user name	  
      user_subject: '', // subject of email
      user_email: '', // user email
      message: '' // message of email
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
      .required('* El Nombre es obligatorio!'),
      user_subject: Yup.string()
      .required('* El Asunto es obligatorio!'),
      user_email: Yup.string().email('Correo Inválido')
      .required('* El Correo es obligatorio!'),
      message: Yup.string().required('* Por favor escribe el mensaje!')
      }),
      onSubmit: (values, actions) => {
      try{
        emailjs.send("service_7taan0b", "template_e8tx4pb", values, "gn4Yy4uX7hf-jeWGb")
          .then(() => {  
            setButtonState('Correo Enviado!');
            actions.setSubmitting(false);
            actions.resetForm();
            console.log('Correo enviado!');
                });
        }
        catch {  
            setButtonState('Hubo un error al enviar el correo!');
            actions.setSubmitting(false);
            console.log(values)
        }
      },
      });

  return (
    <div className='pt-32 md:mx-32 sm:mx-auto'>

      <MapboxCard />
        <div className="container my-8 md:px-6"> 
       
        <div className="flex flex-wrap p-4 shadow-xl bg-white rounded-2xl">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
          <h2 className="mb-6 text-3xl font-bold">Contacto</h2>
          <p className="mb-6 text-neutral-500 ">
            Contactenos para poder recibir una atención personalizada y cotizar alguno de nuestros servicios, tambien puede contactarnos
            por medio de los numeros o correos que estan abajo o puede acudir a nuestras oficinas para poder darle mayor informacion sobre
            nuestros servicios.
          </p>
          <p className="mb-2 text-neutral-500 ">
          -  Calle Miguel Hidalgo #28, El Espinal Oaxaca
          </p>
          <p className="mb-2 text-neutral-500 ">
            +  951-408-8052
          </p>
          <p className="mb-2 text-neutral-500 ">
          -   tinegocios@tinegocios.com.mx
          </p>
          <p className="mb-2 text-neutral-500 ">
          -   ti.negocios@hotmail.com
          </p>
          <div className='flex justify-start'>
          <a
              href="https://www.instagram.com/ti_negocios/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-blue-600 mx-2"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/TINegocios/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-blue-600 mx-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form className="formcontact" onSubmit={formik.handleSubmit} >
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-bold text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="user_name"            
                    placeholder="Tu Nombre"
                    id="name"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.user_name}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <div className={`expandable ${formik.touched.user_name && formik.errors.user_name ? 'show' : ''}`}>
                        {formik.errors.user_name}
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-bold text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="user_email"   
                    id="email"         
                    placeholder="correo@correo.com"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.user_email}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <div className={`expandable ${formik.touched.user_email && formik.errors.user_email ? 'show' : ''}`}>
                      {formik.errors.user_email}
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-bold text-[#07074D]"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="user_subject"
                    id="subject"
                    placeholder="Escribe el asunto"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.user_subject}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <div className={`expandable ${formik.touched.user_subject && formik.errors.user_subject ? 'show' : ''}`} >
                      {formik.errors.user_subject}
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-bold text-[#07074D]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Escribe tu mensaje"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                  <div className={`expandable ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                    {formik.errors.message}
                  </div>
                </div>
                <div className='grid justify-items-center'>
                  <button
                    disabled={formik.isSubmitting}
                    type="submit"
                    className="hover:shadow-none ease-in-out delay-150 duration-300 shadow-3xl hover:bg-blue-400 rounded-md bg-blue-600 py-3 px-8 text-base font-semibold text-white"
                  >
                    <span>{buttonState}</span>
                  </button>            
                </div>
              </form>
        </div>
          
        </div>
    </div>

    </div>
  )
};

export default Contacto;
