import search from "../assets/search.png";
import cloud from "../assets/cloud.png";
import umidade from "../assets/humidity.png";
import vento from "../assets/wind.png";

import useFetchData from "../hooks/useFetchData";

const CardTemp = () => {
  const { dataFetch, nameRef, handleClick, handleKey } = useFetchData();
  return (
    <main className="w-full h-full">
      {dataFetch && (
        <section className="container efeito-vidro ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center gap-4 pt-10">
              <input
                ref={nameRef}
                onKeyDown={handleKey}
                type="text"
                autoFocus
                placeholder="Insira o local"
                className="flex w-80 h-20 bg-[#EBFFFC] border-none outline-none rounded-full pl-10 text-[#626262] text-xl font-normal"
              />
              <button
                onClick={handleClick}
                className="flex justify-center items-center w-[78px] h-[78px] bg-[#EBFFFC] rounded-full cursor-pointer"
              >
                <img src={search} alt="pesquisar icone" />
              </button>
            </div>
            <div className="mt-[28px] flex justify-center">
              <img src={cloud} alt="" />
            </div>
            <div className="flex justify-center text-white text-6xl pb-5 font-normal">
              {(dataFetch.main.temp - 273.15).toFixed(1)}°C
            </div>
            <div className="flex justify-center text-white text-3xl font-normal">
              {dataFetch.name} - {dataFetch.sys.country}
            </div>
            <div className="mt-[50px] w-full text-white flex justify-center">
              <div className="m-auto flex items-start gap-3">
                <img src={umidade} alt="" className="mt-2" />
                <div className="text-xl font-normal">
                  <div>{dataFetch.main.humidity}%</div>
                  <div className="text-xl font-normal">humidade</div>
                </div>
              </div>
              <div className="m-auto flex items-start gap-3">
                <img src={vento} alt="" />
                <div className="text-xl font-normal">
                  <div>{dataFetch.wind.speed} KM</div>
                  <div className="text-xl font-normal">velocidade do vento</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CardTemp;
