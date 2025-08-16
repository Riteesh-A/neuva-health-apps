import { Card, CardContent } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function MeetTheExpert() {
  return (
    <div className="flex flex-col items-center justify-center container section-y gap-10">
      <h1 className="type-display-sm md:type-display-lg">Trusted Expertise</h1>
      <h2 className="type-headline-sm md:type-headline-md">
        Personalized Guidance, Backed by Professionals
      </h2>
      <div className="type-body-md md:type-body-lg font-light text-center">
        Our Weight Loss Program combines the latest obesity management
        innovations with holistic behavioral support. We use GLP-1 medications
        like Mounjaro and Wegovy-proven to regulate appetite, enhance blood
        sugar control, and drive sustainable weight loss-all from the comfort of
        home.
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="p-2 cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative select-none">
                  <img
                    src="/assets/dr-paramesh.jpg"
                    alt="Dr. Paramesh Shamanna"
                    className="w-80 h-120 object-cover rounded-lg"
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      Dr. Paramesh Shamanna
                    </h3>
                    <p className="text-white/90 text-sm mb-1">MD, MBBS</p>
                    <p className="text-white/80 text-xs">
                      Diabetologist for over 22+ years
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="type-headline-sm md:type-headline-md">
                Dr. Paramesh Shamanna
              </DialogTitle>
              <DialogDescription className="type-body-md text-muted-foreground">
                MD, MBBS - Diabetologist
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src="/assets/dr-paramesh.jpg"
                alt="Dr. Paramesh Shamanna"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <p className="type-body-md font-light">
                  Dr. Paramesh Shamanna is a highly experienced diabetologist
                  with over 22 years of practice in diabetes management and
                  obesity treatment.
                </p>
                <div className="type-body-md font-light space-y-1">
                  <p className="font-semibold">Specializations:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Diabetes Management</li>
                    <li>Obesity Treatment</li>
                    <li>Metabolic Health</li>
                    <li>Weight Loss Programs</li>
                  </ul>
                </div>
                <p className="type-label-lg-prominent font-semibold">
                  Experience:{" "}
                  <span className="type-body-md font-light">
                    22+ years in clinical practice
                  </span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="type-headline-sm md:type-headline-md text-center">
          Meet Dr. Paramesh Shamanna (MD, MBBS)
        </div>
        <div className="type-body-md md:type-body-lg font-light text-center">
          A leading diabetologist with over 22 years of experience in metabolic
          health—he leads our clinical team to ensure tailored, safe, and
          discreet care.
        </div>
      </div>
    </div>
  );
}
