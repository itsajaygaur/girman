import { User } from "@/types/index";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className=" w-full  p-4 bg-white rounded-2xl">
      <img
        className="aspect-square rounded-full object-cover"
        src="/dummy-profile.png"
        width={62}
        height={62}
        alt={user.first_name}
      />
      <h2 className="text-[32px] font-semibold">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-gray-600 text-[16px] mb-4 flex items-center gap-1">
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.53546 1.57695C6.58288 -0.525652 3.41712 -0.525652 1.46454 1.57695C1.00095 2.07276 0.632572 2.66502 0.381066 3.31892C0.129561 3.97281 0 4.67514 0 5.38464C0 6.09413 0.129561 6.79646 0.381066 7.45036C0.632572 8.10425 1.00095 8.69651 1.46454 9.19232L4.99969 13L8.53546 9.19232C8.99905 8.69651 9.36743 8.10425 9.61893 7.45036C9.87044 6.79646 10 6.09413 10 5.38464C10 4.67514 9.87044 3.97281 9.61893 3.31892C9.36743 2.66502 8.99905 2.07276 8.53546 1.57695ZM4.99969 7.18413C4.58217 7.18413 4.19028 7.00624 3.89464 6.68329C3.60197 6.36222 3.43761 5.92716 3.43761 5.47359C3.43761 5.02001 3.60197 4.58495 3.89464 4.26389C4.18965 3.94093 4.58217 3.76304 4.99969 3.76304C5.41721 3.76304 5.80972 3.94093 6.10473 4.26389C6.3974 4.58495 6.56177 5.02001 6.56177 5.47359C6.56177 5.92716 6.3974 6.36222 6.10473 6.68329C5.80972 7.00624 5.41721 7.18413 4.99969 7.18413Z"
            fill="#425763"
          />
        </svg>
        {user.city}
      </p>

      <Separator className="mb-4 mt-8" />
      <div className="flex items-center gap-4 justify-between ">
        <div>
          <p className="text-sm font-bold flex items-center gap-1">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.06878 8.33996L8.74017 8.68638C8.74017 8.68638 7.95801 9.50921 5.82386 7.26249C3.6897 5.01576 4.47187 4.19293 4.47187 4.19293L4.67842 3.97422C5.18903 3.4374 5.23742 2.5748 4.79181 1.94468L3.88181 0.657667C3.33004 -0.122339 2.26477 -0.225575 1.63283 0.439724L0.498948 1.63268C0.186228 1.96303 -0.023215 2.38974 0.00206265 2.86386C0.0670622 4.07746 0.585614 6.68742 3.47737 9.73251C6.54463 12.9611 9.42267 13.0896 10.5992 12.9734C10.9718 12.9366 11.2954 12.7363 11.5561 12.461L12.5816 11.3812C13.275 10.6525 13.08 9.40215 12.1931 8.89209L10.8137 8.09755C10.2316 7.76337 9.52378 7.86126 9.06878 8.33996Z"
                fill="black"
              />
            </svg>
            {user.contact_number}
          </p>
          <p className="text-xs text-gray-400">Available on phone</p>
        </div>

        <Dialog>
          <DialogTrigger>
            <Button>Fetch Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl">Fetch Details</DialogTitle>
              <DialogDescription>
                Here are the details of following employees
              </DialogDescription>
              <div className="text-sm !mt-3">
                <p>Name: {user.first_name}</p>
                <p>Location: {user.city}</p>
                <p className="mb-2">Contact Number: {user.contact_number}</p>
                <p className="mb-4">Profile Image:</p>
                <img
                  src="/dummy-profile-full.png"
                  className="aspect-square object-cover max-sm:mx-auto"
                  width={207}
                  height={207}
                  alt={user.first_name}
                />
              </div>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button variant="outline" className="mr-2">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
