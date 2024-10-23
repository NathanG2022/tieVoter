import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StarRanking from "@/components/StarRanking";
import StarRating from "@/components/StarRanking";

export default function me() {
   return <section className="min-h-screen bg-zinc-50">
    <MaxWidthWrapper className="relative pb-10 pt-10 sm:pb-32 lg:pt-24 
    xl:pt-32 lg:pb-52">
      <div className="hidden lg: block absolute inset-0 top-8">
        {/* circle */}
      </div>

      <div className="px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center flex flex-col items-center">
          <h1 className="relative leading-snug w-fit tracking-tight 
          text-balance mt-20 font-bold text-gray-900 text-5xl 
          md:text-6xl">
            Rate today's tie...
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-8"> 
        <div className="p-8">
          <StarRating />
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
}
