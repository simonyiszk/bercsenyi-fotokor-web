import { firebaseFirestore, firebaseStorage } from "@/utils/firebase";
import { SubmitFormSchema } from "@/utils/yup";
import clsx from "clsx";
import { User } from "firebase/auth";
import { Field, Form, Formik, FormikValues } from "formik";
import Image from "next/image";
import { useState } from "react";
import FileInputButton from "../typography/FileInputButton";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { IPost } from "@/models/post";
import { v4 as uuidv4 } from "uuid";
interface SubmitFormValues {
  monogramm: string;
  photoType: "analoge" | "digital";
  file: File | null;
}

type SubmitFormProps = {
  user: User;
};

const SubmitForm = ({ user }: SubmitFormProps) => {
  const initialValues: SubmitFormValues = {
    monogramm: "",
    photoType: "analoge",
    file: null,
  };

  console.log(user);

  const onSubmit = async (values: SubmitFormValues) => {
    const storageRef = ref(firebaseStorage, uuidv4());

    // @ts-expect-error
    const snapshot = await uploadBytes(storageRef, values.file);
    const url = await getDownloadURL(snapshot.ref);

    await setDoc(doc(firebaseFirestore, "posts", uuidv4()), {
      id: `${values.monogramm}_${values.photoType}_${Date.now()}`,
      posted_at: new Date(),
      monogramm: values.monogramm,
      photoType: values.photoType,
      posted_by: {
        monogramm: values.monogramm,
        id: user.uid,
      },
      url: url,
    } as unknown as IPost);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const [imgFile, setImgFile] = useState<File | null>(null);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SubmitFormSchema}
      >
        {({ errors, touched, setFieldValue, setFieldTouched, values }) => {
          console.log(touched);
          console.log(values);
          return (
            <>
              <Form>
                <div className="grid grid-cols-2 gap-x-8 gap-y-16 w-full ">
                  <div>
                    <label htmlFor="monogramm" className="label">
                      Monogrammod:
                    </label>
                    <Field
                      className={clsx(
                        errors.monogramm && touched.monogramm && "input-error",
                        "input bg-base-200  w-full"
                      )}
                      id="monogramm"
                      name="monogramm"
                      placeholder="ab"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label htmlFor="photoType" className="label">
                      kép típusa:
                    </label>
                    <Field
                      as="select"
                      name="photoType"
                      id="photoType"
                      className="input bg-base-200 w-full"
                    >
                      <option className="select" value="analoge">
                        analóg
                      </option>
                      <option className="select" value="digital">
                        digitális
                      </option>
                    </Field>
                  </div>
                  <div className="col-span-full">
                    <FileInputButton
                      options={{
                        accept: "image/png, image/jpeg, image/webp",
                        name: "file",
                        id: "file",
                      }}
                      handleFile={(f) => {
                        setImgFile(f);
                        setFieldValue("file", f);
                      }}
                      isAccepted={!!imgFile}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <ul>
                    <li>
                      {errors.monogramm && touched.monogramm
                        ? errors.monogramm
                        : null}
                    </li>
                    <li>{errors.file && touched.file ? errors.file : null}</li>
                  </ul>
                </div>

                <button
                  className="w-full text-black bg-fotokor-zold rounded-sm px-4 py-1 text-base font-normal text-center"
                  type={"submit"}
                >
                  submit
                </button>
              </Form>

              <div></div>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SubmitForm;
