import Search from "@/components/search";
import PulseCard from "@/components/pulsecard";

const DefaultLoading = () => {
  return <main className="flex flex-col items-center justify-between px-24 py-8">
        <Search>
            <div></div>
        </Search>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5">
        {(Array(9).fill(0)).map((_,index) => (<PulseCard key={'loading'+index} />)
        )}
      </div>
    </main>
}

export default DefaultLoading;