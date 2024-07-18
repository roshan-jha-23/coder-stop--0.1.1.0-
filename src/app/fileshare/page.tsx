"use client";
import React, { useState } from "react";
import { FileIcon, CopyIcon, MailIcon, UploadIcon } from "lucide-react";

const InShare = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [fileURL, setFileURL] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [emailFormState, setEmailFormState] = useState({
    fromEmail: "",
    toEmail: "",
  });

  const maxAllowedSize = 100 * 1024 * 1024; // 100MB

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const uploadFile = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("myfile", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${process.env.baseURL}/api/files`);

    xhr.upload.onprogress = (event) => {
      const percent = Math.round((100 * event.loaded) / event.total);
      setProgress(percent);
    };

    xhr.onerror = () => {
      showToast(`Error in upload: ${xhr.status}.`);
      setFile(null);
    };

    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      setFileURL(response.file);
      setProgress(0);
    };

    xhr.send(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size > maxAllowedSize) {
      showToast("Max file size is 100MB");
      setFile(null);
    } else {
      setFile(selectedFile || null);
      uploadFile();
    }
  };

  const handleBrowseClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.size <= maxAllowedSize) {
      setFile(droppedFile);
      uploadFile();
    } else {
      showToast("Max file size is 100MB");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${process.env.baseURL}/api/files/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: fileURL.split("/").splice(-1, 1)[0],
        emailTo: emailFormState.toEmail,
        emailFrom: emailFormState.fromEmail,
      }),
    });
    const data = await response.json();
    if (data.success) {
      showToast("Email Sent");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <img
        src="/logo.png"
        alt="Inshare logo"
        className="absolute top-4 left-4 w-40"
      />
      <section className="flex flex-col items-center p-8 rounded-3xl shadow-md w-full max-w-lg mt-16 bg-white dark:bg-gray-800">
        <form>
          <div
            className="flex flex-col items-center justify-center w-full min-h-[200px] border-2 border-dashed rounded-lg p-4 cursor-pointer dark:border-gray-600"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleBrowseClick}
          >
            <div className="relative flex justify-center items-center w-20 h-24">
              <FileIcon className="w-20 h-20 text-gray-500 dark:text-gray-300" />
            </div>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="text-lg mt-4">
              Drop your files here or,{" "}
              <span
                className="text-blue-600 cursor-pointer dark:text-blue-400"
                onClick={handleBrowseClick}
              >
                browse
              </span>
            </div>
          </div>
        </form>
        <div className={`w-full mt-4 ${progress > 0 ? "block" : "hidden"}`}>
          <div className="relative w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 transition-transform duration-200"
              style={{ transform: `scaleX(${progress / 100})` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-blue-800 font-semibold dark:text-blue-300">
              {progress}%
            </div>
          </div>
        </div>
        <div className={`w-full mt-4 ${fileURL ? "block" : "hidden"}`}>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Link expires in 24 hrs
          </p>
          <div className="flex items-center mt-2 border rounded-lg p-2 dark:border-gray-600">
            <input
              type="text"
              id="fileURL"
              value={fileURL}
              readOnly
              className="flex-1 p-2 border-none outline-none dark:bg-gray-800 dark:text-gray-300"
            />
            <CopyIcon
              className="w-6 h-6 text-gray-500 cursor-pointer dark:text-gray-300"
              onClick={() => {
                navigator.clipboard.writeText(fileURL);
                showToast("Copied to clipboard");
              }}
            />
          </div>
          <p className="text-center text-gray-600 mt-4 dark:text-gray-400">
            Or Send via Email
          </p>
          <form
            id="emailForm"
            className="flex flex-col items-center mt-4"
            onSubmit={handleEmailSubmit}
          >
            <div className="flex flex-col w-full mb-2">
              <label htmlFor="fromEmail" className="mb-1 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="fromEmail"
                required
                value={emailFormState.fromEmail}
                onChange={(e) =>
                  setEmailFormState({
                    ...emailFormState,
                    fromEmail: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="toEmail" className="mb-1 dark:text-gray-300">
                Receiver email
              </label>
              <input
                type="email"
                id="toEmail"
                required
                value={emailFormState.toEmail}
                onChange={(e) =>
                  setEmailFormState({
                    ...emailFormState,
                    toEmail: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <MailIcon className="w-5 h-5 mr-2" />
              Send
            </button>
          </form>
        </div>
      </section>
      <div
        className="w-1/2 h-1/2 mt-8 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/undraw-upload.svg)" }}
      ></div>
      {toastMessage && (
        <div className="fixed bottom-4 right-1/2 transform translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded shadow-lg transition transform translate-y-0 dark:bg-blue-400">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default InShare;
