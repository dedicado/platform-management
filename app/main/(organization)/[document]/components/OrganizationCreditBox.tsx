interface Props {}

export default function OrganizationCreditBox(props: Props) {
  const {} = props

  return (
    <div className="relative w-full min-w-sm sm:max-w-xs bg-sky-800/60 p-4 rounded-md shadow-md">
      <div className="h-80 flex flex-col justify-center items-center">
        <div className="mx-auto p-2">
          <span className="text-8xl sm:text-6xl text-slate-200">0</span>
          <span className="text-2xl sm:text-xl text-slate-200/80">/1000</span>
        </div>
        <div className="mx-auto p-2">
          <h4 className="text-4xl sm:text-2xl text-center text-sky-400/60 shrink-0">
            consumo de créditos da organização
          </h4>
        </div>
      </div>
    </div>
  )
}
