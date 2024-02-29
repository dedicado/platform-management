import Register from '@/components/Register'

export default function RegisterView() {
  return (
    <div className="relative">
      <div className="w-full py-8 flex flex-col justify-center items-center gap-6">
        <div className="relative w-full max-w-md">
          <h4 className="text-center text-lg font-thin dark:text-sky-600 lowercase">
            preencha os campos abaixo e tenha acesso a todos os recursos da
            plataforma
          </h4>
        </div>
        <div className="px-4 py-8 max-w-md w-full bg-slate-200 dark:bg-slate-800 rounded-md shadow-md">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="relative w-full">
              <Register />
            </div>
          </div>
        </div>
        <small className="text-sm dark:text-sky-600 cursor-pointer">
          já sou registrado
        </small>
      </div>
    </div>
  )
}
