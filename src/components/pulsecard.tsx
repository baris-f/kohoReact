const PulseCard: React.FC = () => {

  return (
      <div className="rounded-md flex flex-col overflow-hidden animate-pulse">
          <div
              className="h-[200px] w-[200px] bg-slate-200 object-cover rounded-md pulse"
          />
          <div className="py-2 pl-1 text-black flex flex-col">
              <div className="grid grid-cols-3 gap-4 mb-1">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
          </div>
      </div>
  )
}
 export default  PulseCard;