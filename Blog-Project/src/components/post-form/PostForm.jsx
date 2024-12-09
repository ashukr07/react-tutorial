import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RTE, Button, Input, Select } from "../index";
import appwriteService from "../../appwite/config.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//joh bhi form ko use karega woh hame value dega ki edit karna ha ya naya form banana hai
const PostForm = ({ post }) => {
  // ham kisi bhi field ko continously watch kar skte hai
  // kuch bhi value set krni hai form me to setValue hame react hook form se milta hai
  //agar kisi form ka control chahiye toh yhi pass karenge to the editor
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      // default value jo hame shuruwat me form me rkhni h value that will come from the user who is calling it

      // jaise woh edit karne  aaya hai woh default value deni pdegi to the form
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  //agar post ki value hai toh update karo nahi toh new entry banao
  const submit = async (data) => {
    if (post) {
      const file = data.images[0]
        ? appwiteService.uploadFile(data.images[0])
        : null;
      //yani agar meri file upload hua hai toh hum deletion opertion karenge
      if (file) {
        appwiteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwiteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const file = appwiteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwiteService.createPost({
          ...data,
          //kyonki hamare pass form me kahi userId nahi hoga toh woh hamne userData se le aaye from store
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  //yeh title ko watch karta hai and hame slug ki value generate krta h saath hi saaath me
  //spacing aur saari chije hatani hongi uske liye watch karenge
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      //jaha pe title hai waha se value leni hai toh woh hoga tabhi aage badho
      if (name === "title") {
        //slug me value daldo after transforming it
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    //koi method use kiya toh use varible me store karliya
    //return me callback ke andar unsubscribe krte hai taaki woh apne aap me ghumke na reh jaye
    return () => {
      //memory mangement ke liye
      //optimised banta hai
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  //watch jiske saath bhi laga usme kuch bhi change aaya toh
  //input form me title pr watch lagayenge
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
