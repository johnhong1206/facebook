import Image from "next/image";
import { useSession } from "next-auth/client";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { auth, db, storage } from "../config/firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function InputBox() {
  const [user, loading] = useAuthState(auth);
  const inputRef = useRef(null);
  const imgPickerRef = useRef(null);
  const [imgToPost, setImgtoPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: user.displayName,
        email: user.email,
        image: user?.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imgToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imgToPost, "data_url");

          removeImg();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    {
                      merge: true,
                    }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImgtoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImgtoPost(readerEvent.target.result);
    };
  };

  const removeImg = () => {
    setImgtoPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center p-4">
        <Image
          className="rounded-full"
          src={user?.photoURL}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className=" rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`what's on your mind, ${user.displayName}`}
          />
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>
        {imgToPost && (
          <div
            onClick={removeImg}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imgToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t overflow-x-scroll md:overflow-x-hidden">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm lg:text-base">Live Video</p>
        </div>
        <div className="inputIcon" onClick={() => imgPickerRef.current.click()}>
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm lg:text-base">Photo/Video</p>
          <input
            ref={imgPickerRef}
            type="file"
            hidden
            onChange={addImgtoPost}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm lg:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
