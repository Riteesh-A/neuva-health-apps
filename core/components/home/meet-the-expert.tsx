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
      <h1 className="type-display-sm md:type-display-lg">Meet the experts</h1>
      <div className="type-body-md md:type-body-lg font-light text-center">
        At Neuva, our Weight Loss Programme is designed by experts in obesity
        management, behavioural change, and metabolic health. We combine
        advanced treatments like Mounjaro, which regulates appetite and blood
        sugar, with personalised health guidance. Our team, including doctors
        and nutritionists, works together to ensure a sustainable and effective
        weight loss journey.
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="p-2 cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative select-none">
                  <img
                    src="/assets/doctor_1.jpeg"
                    alt="Dr. Paramesh Shamanna"
                    className="w-80 h-120 object-cover rounded-lg"
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      Dr. Paramesh Shamanna
                    </h3>
                    <p className="text-white/90 text-sm mb-1">MD, MBChB</p>
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
                MD, MBChB - Diabetologist
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src="/assets/doctor_1.jpeg"
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
    </div>
  );
}
