import Link from 'next/link';

export default function Cronologia({ params } : { params : { cronologia : string}}) {

    const titulo: string = "CONFLICTO TCB-MILITARES: JURISDICCIÓN ORDINARIA VS JURISDICCIÓN MILITAR";
    const autor: string = "NEYER ZAPATA VASQUEZ";
    const fecha: string = "26/05/2024";
    const recurso: string = "/files/cronologia_ejm.pdf";
    const analisis: number = 1;

    return (
        <div className="sm:container sm:mx-auto mb-2.5">
            <div className='pt-2.5'>
                <h1 className="text-2xl">{titulo}</h1>
                <div className="inline">
                    <span className="material-symbols-outlined align-middle">person</span>
                    <span className="align-middle ms-2">{autor}</span>
                </div>
                <div className="sm:inline sm:ms-10">
                    <span className="material-symbols-outlined align-middle">event</span>
                    <span className="align-middle ms-2">{fecha}</span>
                </div>
            </div>
            <hr className="border border-[#6B2236] my-2.5" />
            <div className="flex flex-col sm:flex-row">
                <iframe src={recurso} className="mx-auto w-[350px] sm:w-3/4 h-[490px] sm:h-[730px]"></iframe>
                <div className="w-[350px] sm:min-w-[270px] ms-2.5 mt-2.5 sm:mt-0">
                    <h2 className="text-xl mb-2.5">Documentos de análisis ({analisis})</h2>
                    <Link href="https://pcbiol.posgrado.unam.mx/lineamientos-para-empastar-tesis-por-art%C3%ADculo.html" target='_blank'>
                        <div className="flex border border-[#6B2236] rounded h-[125px] hover:scale-[1.01] hover:cursor-pointer">
                            <div className='w-[25%] p-1 border-r'>
                                <img src="https://pcbiol.posgrado.unam.mx/images/portada_tesis_articulo.jpg" alt="" className='rounded mt-[-3px]'/>
                            </div>
                            <div className='flex items-center w-[75%] ms-2'>
                                <div>
                                    <h3>Título: Causas de los eventos</h3>
                                    <p>Autor: Ivan Palacios</p>
                                    <p>Fecha: 28/05/2024</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};