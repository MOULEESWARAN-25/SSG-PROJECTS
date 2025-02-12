import Futuristic from "../assets/image.png";

export default function About() {
  return (
    <div>
      <div className="p-5 flex flex-col gap-3 sm:flex-row">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          error assumenda cum aliquid ex quaerat eos! Expedita, similique.
          Voluptates similique consequuntur non nulla aliquam laborum commodi
          expedita voluptatem eligendi repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          error assumenda cum aliquid ex quaerat eos! Expedita, similique.
          Voluptates similique consequuntur non nulla aliquam laborum commodi
          expedita voluptatem eligendi repellat?
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:w-40 sm:gap-20">
        <img
          src={Futuristic}
          className="w-full"
        />
        <img
          src={Futuristic}
          className="w-full"
        />
        <img
          src={Futuristic}
          className="w-full"
        />
        <img
          src={Futuristic}
          className="w-full"
        />
        <img
          src={Futuristic}
          className="w-full"
        />
      </div>
    </div>
  );
}
