import Button from "../Components/Button"
const Subscriber = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 " id="contact-us">
      <h2 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold "> Sign Up For
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h2>
      
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 sm:border p-2.5 sm:border-slate-gray rounded-full ">
        <input type="text"
          placeholder="Subscribe@nike.com"
          className="input"
        />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up"
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscriber