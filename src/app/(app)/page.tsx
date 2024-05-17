import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
      <div className="container relative">
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-28 lg:pb-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            The place for FiveM resources
          </h1>
          <p className="md:max-w-[550px] sm:max-w-[400px] max-w-[300px] text-center text-lg font-light text-foreground">
            Skip the resource swamp &ndash; dive into FiveM&apos;s greatest
          </p>
          <div className="flex space-x-4 py-4">
            <Button>
              Discover scripts
            </Button>
            <Button variant={'outline'}>
              Learn More
            </Button>
          </div>
        </section>
        <section className="mx-auto items-center md:max-w-[550px] text-center">
          <p>Todo: add more shit here</p>
        </section>
      </div>
    )
  }