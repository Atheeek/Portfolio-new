// import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export default function CarouselPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            3D Photo Carousel
          </h1>
          <p className="text-muted-foreground text-lg">
            Drag to rotate • Click to view fullscreen
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="min-h-[500px] flex flex-col justify-center rounded-lg">
            <div className="p-2">
              {/* <ThreeDPhotoCarousel /> */}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Images are randomly generated from Picsum Photos</p>
        </div>
      </div>
    </div>
  )
}