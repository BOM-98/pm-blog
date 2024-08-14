"use client";

import Image from "next/image";
import { React, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./writePage.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../utils/firebase";
import Button from "@/components/design/Button";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const storage = getStorage(app);

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();

  const [catSlug, setCatSlug] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading status
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "identifying-problems", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="w-full h-20 h1 my-12 focus:outline-none bg-[var(--bg)]"
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2 className="h4 mb-4">Category:</h2>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCatSlug(cat.slug)}
              className={`px-4 py-2 rounded-full border border-${cat.color}-500 text-${cat.color}-500 ${
                catSlug === cat.slug ? `bg-${cat.color}-100` : `hover:bg-${cat.color}-50`
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-row gap-[50px]">
          <button className="button hover:text-orange-500 mt-12" onClick={() => setOpen(!open)}>
            <svg
              className="w-10 h-10 hover:text-orange-500 hover:scale-105"
              id="Layer_1"
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              fill="currentColor"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m256 .001c-141.158 0-255.999 114.841-255.999 255.999s114.841 255.999 255.999 255.999 255.999-114.84 255.999-255.999-114.841-255.999-255.999-255.999zm0 479.998c-123.513 0-223.999-100.486-223.999-223.999s100.486-223.999 223.999-223.999 223.999 100.485 223.999 223.999c0 123.513-100.486 223.999-223.999 223.999zm142-223.999c0 8.837-7.164 16-16 16h-110v110c0 8.837-7.164 16-16 16s-16-7.163-16-16v-110h-110c-8.836 0-16-7.163-16-16s7.164-16 16-16h110v-110c0-8.837 7.164-16 16-16s16 7.163 16 16v110h110c8.836 0 16 7.164 16 16z" />
            </svg>
          </button>
          {open && (
            <>
              <div className="mt-12 flex flex-row gap-[10px]">
                <input type="file" id="image" onChange={(e) => setFile(e.target.files[0])} className="invisible" />
                <button>
                  <label htmlFor="image" className="button">
                    <div className="h-10 w-10 hover:text-orange-500">
                      <svg
                        className="w-10 h-10 hover:text-orange-500 hover:scale-105"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="fi_15480936"
                      >
                        <circle cx="8.5" cy="7.5" r="2.5"></circle>
                        <path d="m12 0a12 12 0 1 0 12 12 12.01375 12.01375 0 0 0 -12-12zm0 1a10.98948 10.98948 0 0 1 10.08551 15.37848l-7.232-7.232a.49983.49983 0 0 0 -.707 0l-5.39651 5.39652-1.89648-1.89652a.49983.49983 0 0 0 -.707 0l-4.06931 4.06928a10.97415 10.97415 0 0 1 9.92279-15.71576z"></path>
                      </svg>
                    </div>
                  </label>
                </button>
                <button>
                  <div className="h-10 w-10 hover:text-orange-500">
                    <svg
                      className="w-10 h-10 hover:text-orange-500 hover:scale-105"
                      id="fi_3024584"
                      fill="currentColor"
                      enable-background="new 0 0 189.524 189.524"
                      height="512"
                      viewBox="0 0 189.524 189.524"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g>
                          <path
                            clip-rule="evenodd"
                            d="m94.762 180.048c47.102 0 85.286-38.183 85.286-85.286 0-47.102-38.183-85.286-85.286-85.286-47.102 0-85.286 38.184-85.286 85.286s38.184 85.286 85.286 85.286zm0 9.476c52.335 0 94.762-42.427 94.762-94.762 0-52.336-42.427-94.762-94.762-94.762-52.336 0-94.762 42.426-94.762 94.762 0 52.335 42.426 94.762 94.762 94.762z"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                        <g>
                          <path
                            clip-rule="evenodd"
                            d="m119.386 94.762-43.577-29.051v58.103zm8.804-5.519c3.939 2.626 3.939 8.413 0 11.039l-51.545 34.364c-4.408 2.939-10.313-.222-10.313-5.52v-68.727c0-5.298 5.905-8.458 10.313-5.519z"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </button>
                <button>
                  <div className="h-10 w-10 hover:text-orange-500">
                    <svg
                      className="w-10 h-10 hover:text-orange-500 hover:scale-105"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="512"
                      height="512"
                      id="fi_4461281"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <path d="M12,23.5A11.5,11.5,0,1,1,23.5,12,11.5131,11.5131,0,0,1,12,23.5Zm0-22A10.5,10.5,0,1,0,22.5,12,10.5118,10.5118,0,0,0,12,1.5Z"></path>
                      </g>
                      <g id="Layer_3" data-name="Layer 3">
                        <path d="M15,5.5H10a.47.47,0,0,0-.0642.0128.4561.4561,0,0,0-.0622.0123.492.492,0,0,0-.2271.1214l-3,3a.4916.4916,0,0,0-.1212.2265.4637.4637,0,0,0-.0125.0627A.4876.4876,0,0,0,6.5,9v7A2.5026,2.5026,0,0,0,9,18.5h6A2.5026,2.5026,0,0,0,17.5,16V8A2.5026,2.5026,0,0,0,15,5.5ZM9.5,7.207V8a.5006.5006,0,0,1-.5.5H8.207ZM16.5,16A1.5017,1.5017,0,0,1,15,17.5H9A1.5017,1.5017,0,0,1,7.5,16V9.5H9A1.5017,1.5017,0,0,0,10.5,8V6.5H15A1.5017,1.5017,0,0,1,16.5,8Z"></path>
                        <path d="M12.3541,9.6471a.5016.5016,0,0,0-.7082,0L9.6465,11.6465a.5.5,0,0,0,.707.707L11.5,11.207V15a.5.5,0,0,0,1,0V11.207l1.1465,1.1465a.5.5,0,0,0,.707-.707Z"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="let's go" />
      </div>
      <Button primary onClick={handleSubmit}>
        Publish
      </Button>
    </div>
  );
};

export default WritePage;
