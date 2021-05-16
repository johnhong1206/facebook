import { ChatAltIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Post({ key, name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col w-11/12 sm:w-full">
      <div className=" p-5 bg-white mt-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt={"name"}
          />
          <div>
            <p className=" font-medium">{name}</p>
            {timestamp ? (
              <p className=" text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p p className=" text-xs text-gray-400">
                Loading
              </p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex p-4 item-center rounded-b-2xl bg-white shadow-md text-gray-400 border-r-t">
        <div className="inputIcon rounded-none rounded-bl-2xl justify-center">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none justify-cente">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl justify-cente">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
