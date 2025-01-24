"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { RxReload } from "react-icons/rx";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { cn } from "@/lib/utils";
import { Button } from "../UI/button";
import { Input } from "../UI/input";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const SigninView = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const t = useI18n();
  const locale = useCurrentLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // "use server";
    try {
      const datas = {
        email: values.email,
        password: values.password,
      };

      const { data, error } = await supabase.auth.signInWithPassword({
        email: "example@email.com",
        password: "example-password",
        // options: {
        //   redirectTo: origin
        // }
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem dir={dir}>
              <FormLabel className="text-forest font-medium text-lg">
                {t("common.form.email")}
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem dir={dir}>
              <FormLabel className="text-forest font-medium text-lg">
                {t("common.form.password")}
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} type={showPassword ? "text" : "password"} />
                  <div
                    className={cn(
                      `absolute inset-y-0 flex items-center px-4  text-gray-500`,
                      { "left-0": dir === "rtl", "right-0": dir === "ltr" }
                    )}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <RxReload className="animate-spin text-xl" />
        <Button className="w-full text-xl " type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};
