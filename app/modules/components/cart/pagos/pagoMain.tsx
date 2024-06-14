'use client'
import React from 'react'
import Image from 'next/image'
import { useForm } from '@/app/modules/handlers/form'
import ArraysImg from '@/app/modules/utils/arraysImg'
import { useCart } from '@/app/modules/handlers/addCart'
import PagoTarjeta from './pagoTarjeta'
import PagoMercado from './pagoMercado'
import FinalCompra from './finalCompra'

const Pago = () => {
  const { formData, handleClick,isPago } = useForm()
  const { selectedProductsArray } = useCart();
  //Img selecionada
  const { arrayImg } = ArraysImg();
  const { ids } = useCart();

  const imgData = arrayImg.find(img => img.id === ids);
  //
  window.scrollTo(0, 0);

  return (
    <>
    {isPago ? ( <FinalCompra/>) : (  
    <> 
      <div className="flex justify-center mt-10 text-center">
        <div className=' justify-center text-xl'>
          <span className='bg-gray-300 px-2 md:px-4 md:py-2 me-2 rounded-full text-white'>1</span>Ingresá tus datos
        </div>
        <span className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="100px" fill="#666666"><path d="M249-744v-15h462v15H249Z" /></svg>
        </span>
        <div className=' justify-center md:text-xl'>
          <span className='bg-sky-400 text-xl px-4 py-2 md:px-6 md:py-4 me-2 rounded-full text-white'>2</span>Aboná tu equipo
        </div>
      </div>
      <section className=" text-gray-600 body-font">
        <div className="  container px-5 py-6 mx-auto flex flex-col">
          <div className="bg-white lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-2/3  sm:pl-8 sm:py-8 sm:border-r border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <button onClick={handleClick} className='hover:bg-sky-500 inline-flex w-56  bg-sky-400 mb-4 text-sm px-2 py-2 md:px-6 md:py-2 me-2 rounded-full text-white '>
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="m395.17-277-203-203 203-203 16.66 15.67L236.5-492h531.33v23.17H236.5L411.83-293.5 395.17-277Z" /></svg>
                  <span className='mt-2'>Volver a  mis datos </span>
                </button>
                <h2 className=' text-dark font-bold pt-4 md:text-2xl'>Metodos de pago</h2>
                <div className="space-y-4 pt-8  ">
                  <details className=" bg-white me-4 rounded-lg group [&_summary::-webkit-details-marker]:hidden" >
                    <summary className=" flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                      <div className=" inline-flex font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M826.33-691.53v423.06q0 22.78-16.09 38.87-16.1 16.1-38.85 16.1H188.61q-22.75 0-38.85-16.1-16.09-16.09-16.09-38.87v-423.06q0-22.78 16.09-38.87 16.1-16.1 38.85-16.1h582.78q22.75 0 38.85 16.1 16.09 16.09 16.09 38.87Zm-669.5 96.36h646.34v-96.16q0-12-10-22t-22-10H188.83q-12 0-22 10t-10 22v96.16Zm0 68v258.5q0 12 10 22t22 10h582.34q12 0 22-10t10-22v-258.5H156.83Zm0 290.5v-486.66 486.66Z" /></svg>
                        <span className=' ml-3 me-3 mt-2 font-light text-sm'>Tarjeta de debito o credito</span>
                      </div>
                      <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <PagoTarjeta />
                  </details>
                  <details className=" bg-white me-4 pt-4 group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                      <div className=" inline-flex font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                          <ellipse cx="23.5" cy="23.5" fill="#4fc3f7" rx="21.5" ry="15.5"></ellipse><path fill="#fafafa" d="M22.471,24.946c-1.978-5.537-4.884-10.881-6.085-12.995c-0.352-0.619-0.787-1.186-1.29-1.69 l-2.553-2.553c-0.391-0.391-1.414,0-1.414,0L9.497,8.734l-0.162,2.319L8.773,11c-0.518,0-0.938,0.42-0.938,0.938 c0,0.52,0.413,0.969,0.933,0.961c1.908-0.03,3.567,1.601,3.567,1.601h2c0.32,0.32,1.139,1.366,1.328,2.439 c0.107,0.611,0.154,1.229,0.119,1.848C15.458,24.622,16.835,26,16.835,26c-5.5-3.5-14.819-2.964-14.819-2.964l0.193,3.016L5,31 c0.919,0.212,0.744-0.626,1.765-0.504c6.199,0.741,13.57,0.004,13.57,0.004c1.5,0,1.958-0.793,2.665-1.5 C24,28,22.849,26.004,22.471,24.946z"></path><path fill="#fafafa" d="M24.913,24.946c1.978-5.537,4.884-10.881,6.085-12.995c0.352-0.619,0.787-1.186,1.29-1.69 l2.553-2.553c0.391-0.391,1.414,0,1.414,0L37.814,9l0.235,2.053L38.611,11c0.518,0,0.938,0.42,0.938,0.938 c0,0.52-0.413,0.969-0.933,0.961c-1.908-0.03-3.567,1.601-3.567,1.601h-2c-0.32,0.32-1.139,1.366-1.328,2.439 c-0.107,0.611-0.154,1.229-0.119,1.848C31.926,24.622,30.549,26,30.549,26c5.5-3.5,15-3,15-3l-0.165,3l-3,5 c-0.919,0.212-0.744-0.626-1.765-0.504c-6.199,0.741-13.57,0.004-13.57,0.004c-1.5,0-1.958-0.793-2.665-1.5 C23.384,28,24.535,26.004,24.913,24.946z"></path><path fill="#1a237e" d="M43.832,16.326c-0.311-0.415-0.644-0.808-0.992-1.187c-0.059-0.064-0.123-0.123-0.183-0.186 c-0.309-0.326-0.628-0.639-0.96-0.938c-0.026-0.023-0.053-0.045-0.079-0.068c-0.587-0.522-1.201-1.012-1.845-1.454 c0.071-0.175,0.11-0.364,0.11-0.555c0-0.792-0.643-1.437-1.481-1.437c-0.001,0-0.003,0-0.004,0l-0.015,0.002V9.32 c0-0.534-0.288-1.032-0.75-1.299L36.269,7.24c-0.221-0.085-1.356-0.478-1.946,0.113l-1.837,1.838 c-0.381-0.106-0.89-0.25-1.211-0.326C28.893,8.288,26.446,8.014,24,8c-3.031-0.004-6.095,0.39-9.018,1.275l-1.921-1.921 c-0.59-0.59-1.725-0.199-2.018-0.079L9.75,8.021C9.288,8.288,9,8.786,9,9.32v1.186L8.938,10.5c-0.793,0-1.438,0.646-1.438,1.438 c0,0.311,0.103,0.614,0.283,0.865c-0.978,0.715-1.903,1.512-2.722,2.422c-0.315,0.35-0.616,0.715-0.9,1.096 C2.638,18.346,2.061,20.87,2,23.5c-0.035,2.628,0.455,5.223,1.932,7.343c1.478,2.132,3.451,3.854,5.624,5.163 c4.378,2.609,9.436,3.749,14.444,3.846c2.511-0.026,5.023-0.319,7.471-0.924c2.442-0.624,4.81-1.582,6.986-2.9 c2.163-1.328,4.143-3.041,5.617-5.18c1.476-2.122,1.932-4.719,1.894-7.347C45.905,20.87,45.357,18.348,43.832,16.326z M40.793,15.139c0.229,0.225,0.448,0.459,0.662,0.697c0.096,0.107,0.195,0.211,0.288,0.32c0.293,0.347,0.573,0.703,0.828,1.076 c1.088,1.579,1.785,3.39,1.957,5.242c-2.274-0.031-8.444,0.114-13.042,2.342c0.335-1.133,0.619-3.016,0.449-6.058 c-0.03-0.552,0.008-1.135,0.113-1.733c0.139-0.79,0.702-1.618,1.054-2.026h0.727c0.731,0,1.432-0.224,2.025-0.647 c0.624-0.444,1.559-0.981,2.588-0.954c0.072,0,0.139-0.03,0.21-0.04c0.267,0.192,0.536,0.383,0.792,0.587 c0.076,0.061,0.15,0.124,0.225,0.186c0.273,0.224,0.538,0.457,0.795,0.696C40.576,14.93,40.686,15.034,40.793,15.139z M24,9 c2.369,0.026,4.734,0.303,7.027,0.87c0.208,0.053,0.412,0.118,0.617,0.181c-0.482,0.503-0.906,1.054-1.246,1.652 c-1.175,2.068-4.124,7.483-6.121,13.075c-0.075,0.208-0.163,0.43-0.255,0.66c-0.112,0.281-0.226,0.572-0.331,0.868 c-0.104-0.296-0.219-0.588-0.331-0.868c-0.092-0.23-0.18-0.452-0.255-0.66c-2-5.599-4.947-11.009-6.121-13.075 c-0.297-0.523-0.667-1.004-1.074-1.456C18.522,9.461,21.264,9.054,24,9z M5.435,17.238c0.251-0.364,0.524-0.713,0.811-1.052 c0.094-0.112,0.196-0.218,0.294-0.327c0.202-0.225,0.408-0.448,0.625-0.662c0.115-0.114,0.233-0.224,0.351-0.335 c0.229-0.213,0.463-0.421,0.704-0.622c0.099-0.083,0.198-0.166,0.299-0.247c0.243-0.193,0.495-0.376,0.748-0.558 c0.886,0.089,1.707,0.522,2.262,0.918C12.123,14.776,12.823,15,13.555,15h0.727c0.352,0.407,0.915,1.235,1.054,2.026 c0.105,0.597,0.143,1.18,0.113,1.733c-0.17,3.042,0.114,4.927,0.449,6.059c-4.193-2.029-9.734-2.333-12.425-2.344 C3.648,20.623,4.346,18.814,5.435,17.238z M6.236,30.271c-0.192-0.224-0.396-0.437-0.572-0.673 C4.329,27.826,3.49,25.705,3.426,23.5c0-0.008,0.001-0.017,0.001-0.025c2.878,0.006,9.226,0.351,13.305,2.947 c0.211,0.134,0.484,0.088,0.646-0.104c0.162-0.19,0.153-0.477-0.014-0.662c-0.012-0.014-1.218-1.422-0.916-6.842 c0.035-0.63-0.007-1.29-0.126-1.962c-0.218-1.235-1.133-2.372-1.467-2.706C14.76,14.053,14.632,14,14.5,14h-0.945 c-0.522,0-1.021-0.159-1.445-0.462c-0.745-0.531-1.925-1.147-3.185-1.14c-0.131,0.004-0.226-0.063-0.281-0.117 C8.552,12.192,8.5,12.067,8.5,11.938c0-0.242,0.196-0.438,0.391-0.44l0.562,0.054c0.111,0.007,0.216-0.027,0.308-0.084l0.386,0.386 C10.242,11.949,10.37,12,10.5,12c0.053,0,0.106-0.009,0.158-0.025l1.207-0.402l1.281,1.281C13.244,12.951,13.372,13,13.5,13 s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,11l0.146-0.146C12.951,10.756,13,10.628,13,10.5 s-0.049-0.256-0.146-0.354l-1-1c-0.195-0.195-0.512-0.195-0.707,0C11.049,9.244,11,9.372,11,9.5s0.049,0.256,0.146,0.354 l0.646,0.646l-0.063,0.063l-1.095,0.365L10,10.293V9.32c0-0.178,0.096-0.344,0.25-0.434l1.22-0.712 c0.365-0.139,0.792-0.179,0.883-0.114l2.554,2.554c0.475,0.475,0.882,1.007,1.209,1.583c1.161,2.043,4.076,7.393,6.049,12.917 c0.078,0.219,0.171,0.452,0.267,0.694c0.347,0.871,0.741,1.858,0.58,2.583C22.808,29.309,21.728,30,20.49,30 c-0.07,0.002-7.123,0.139-13.425,0.011C6.798,30.002,6.509,30.114,6.236,30.271z M37.217,33.918 c-1.98,1.119-4.156,1.898-6.385,2.419c-2.228,0.539-4.528,0.798-6.832,0.812c-4.592,0.01-9.259-0.951-13.23-3.208 c-1.401-0.799-2.709-1.764-3.832-2.891c0.036-0.014,0.083-0.038,0.107-0.039C13.367,31.138,20.439,31.001,20.5,31 c1.396,0,2.616-0.673,3.192-1.67c0.575,0.997,1.794,1.67,3.182,1.67c0.071,0.002,7.146,0.139,13.462,0.011 c0.089,0.003,0.272,0.102,0.483,0.249C39.748,32.289,38.531,33.185,37.217,33.918z M42.329,29.593 c-0.247,0.329-0.526,0.635-0.803,0.941c-0.37-0.273-0.81-0.524-1.192-0.524c-0.005,0-0.011,0-0.017,0 c-6.3,0.125-13.354-0.01-13.434-0.011c-1.228,0-2.308-0.691-2.512-1.608c-0.161-0.725,0.232-1.712,0.58-2.583 c0.096-0.242,0.189-0.476,0.267-0.694c1.971-5.518,4.887-10.871,6.049-12.917c0.327-0.576,0.734-1.108,1.209-1.583l2.55-2.551 C35.122,8,35.548,8.037,35.841,8.14l1.293,0.747c0.154,0.09,0.25,0.256,0.25,0.434v0.973l-0.635,0.635l-1.095-0.365L35.591,10.5 l0.646-0.646c0.098-0.098,0.146-0.226,0.146-0.354s-0.049-0.256-0.146-0.354c-0.195-0.195-0.512-0.195-0.707,0l-1,1 c-0.098,0.098-0.146,0.226-0.146,0.354s0.049,0.256,0.146,0.354L34.677,11l-1.146,1.146c-0.195,0.195-0.195,0.512,0,0.707 C33.628,12.951,33.756,13,33.884,13s0.256-0.049,0.354-0.146l1.281-1.281l1.207,0.402C36.777,11.991,36.831,12,36.884,12 c0.13,0,0.258-0.051,0.354-0.146l0.386-0.386c0.092,0.057,0.197,0.092,0.308,0.084l0.515-0.052c0.242,0,0.438,0.196,0.438,0.438 c0,0.129-0.052,0.254-0.143,0.343c-0.056,0.055-0.157,0.109-0.282,0.117c-1.279,0.011-2.439,0.608-3.185,1.14 C34.851,13.841,34.352,14,33.83,14h-0.946c-0.133,0-0.26,0.053-0.354,0.146c-0.334,0.334-1.25,1.473-1.467,2.706 c-0.118,0.674-0.161,1.334-0.126,1.963c0.302,5.419-0.904,6.827-0.907,6.831c-0.18,0.181-0.196,0.468-0.037,0.666 c0.159,0.199,0.442,0.246,0.659,0.109c4.408-2.805,11.576-2.969,13.922-2.942c0,0.007,0.001,0.013,0.001,0.02 C44.507,25.705,43.666,27.824,42.329,29.593z"></path>
                        </svg>
                        <span className=' ml-3 me-3 mt-2 font-light text-sm '>Mercado Pago - Paga con dinero en cuenta o con dos tarjetas</span>
                      </div>
                      <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 px-4 leading-relaxed ">
                      <PagoMercado />
                    </div>
                  </details>
                </div>
              </div>
              <div className=" bg-sky-600   md:mt-0 sm:w-1/3 text-center  mt-40 sm:mt-0">
                <div className='bg-white'>
                {selectedProductsArray.map((product, index) => (
                  <div key={index}>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                    <h1 className="text-gray-900 text-xl title-font font-medium mb-1">{product.title}</h1>
                    <div className=" mt-2 flex justify-end border-b border-gray-200 pt-4 pb-4 mb-4">
                      <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                          <div className="m-2 flex justify-between">
                            <dt>Subtotal</dt>
                            <dd className="line-through text-gray-400 text-lg">{product.price}</dd>
                          </div>
                          <div className="m-2 flex mb-4 justify-between">
                            <dt>Descuento</dt>
                            <dd className="bg-sky-400 rounded-lg">-{product.discountPercentage}%</dd>
                          </div>
                          <div className="flex justify-center text-3xl pt-4">
                            <dd>
                              $ {Math.round((product.price - product.price * product.discountPercentage / 100) * 100) / 100}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <div className="inline-flex mx-auto">

                    </div>
                  </div>
                ))}
                </div>
                <div className=" mx-auto  inline-flex items-center justify-center ">
                  {imgData ? (
                    <div className=" ">
                      <Image
                        width={800}
                        height={800}
                        className=" md:size-30 object-cover"
                        src={imgData.img}
                        alt='celular'
                      />
                    </div>
                  ) : null
                  }
                </div>
                <div className="flex  flex-col bg-sky-600 items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-100 text-lg">Tus datos </h2>
                  <div className="w-20 h-1 bg-white rounded mt-2 mb-4"></div>
                  <div className="text-base ">
                    <div className='flex-wrap '>
                    <span className='text-gray-900 font-bold text-sm'>Datos personales</span>
                      <ul>
                        <li className='text-white font-light text-sm'>{formData.nombre} {formData.apellido}</li>
                        <li className='text-white font-light text-sm'>{formData.dni}</li>
                        <li className='text-white font-light text-sm'>{formData.email}</li>
                        <li className='text-white font-light text-sm'>{formData.celular}</li>
                      </ul>
                    </div>
                    {formData.checkboxFormEnvio ? (
                      <div className="flex-wrap ">
                        <span className='text-gray-900 font-bold text-sm'>Envio {formData.checkboxFormEnvio ? "gratis" : ""}</span>
                        <ul>
                          <li className='text-white font-light text-sm'>{formData.provincia}</li>
                          <li className='text-white font-light text-sm'>{formData.localidad}</li>
                          <li className='text-white font-light text-sm'>{formData.calle}</li>
                          <li className='text-white font-light text-sm'>{formData.altura}</li>
                        </ul>
                      </div>
                    ) : <div className="flex-wrap  ">
                      <span className='text-gray-900 font-bold text-sm'>Retiro en la sucursal</span>
                      <ul>
                        <li className='text-white font-light text-sm'>Bueno aires</li>
                        <li className='text-white font-light text-sm'>La plata</li>
                        <li className='text-white font-light text-sm'>avenida siempre viva</li>
                        <li className='text-white font-light text-sm'>742</li>
                      </ul>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
     ) }
  </>
  )
}
export default Pago;