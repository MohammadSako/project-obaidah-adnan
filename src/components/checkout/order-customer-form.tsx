"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/UI/form";

import { Input } from "@/components/UI/input";
import { useToast } from "@/hooks/use-toast";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { useItemStore } from "@/lib/store";
import { Textarea } from "@/components/UI/textarea";

interface AddFormProps {
  onAddCustomerOrder: (data: FormValues) => void;
}
type FormValues = {
  firstname: string;
  lastname: string;
  phonenumber: string;
  firstline: string;
  secondline: string;
  email: string;
  city: string;
  additional?: string;
};

interface AddFormProps {
  onAddCustomerOrder: (data: FormValues) => void;
}

export function OrderCustomerForm({ onAddCustomerOrder }: AddFormProps) {
  const { toast } = useToast();
  const t = useI18n();
  const locale = useCurrentLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const { totalQuantity, items, totalAllPrice } = useItemStore();

  const formSchema = z.object({
    firstname: z.string().min(2, {
      message: t("common.formvalidation.firstname"),
    }),
    lastname: z.string().min(2, {
      message: t("common.formvalidation.lastname"),
    }),
    phonenumber: z.string().min(10, {
      message: t("common.formvalidation.phone"),
    }),
    firstline: z.string().min(2, {
      message: t("common.formvalidation.add1"),
    }),
    secondline: z.string().min(2, {
      message: t("common.formvalidation.add2"),
    }),
    email: z.string().min(7, {
      message: t("common.formvalidation.email"),
    }),
    city: z.string().min(3, {
      message: t("common.formvalidation.city"),
    }),
    additional: z.string().min(0),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      firstline: "",
      secondline: "",
      email: "",
      city: "",
      additional: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = {
        firstname: values.firstname,
        lastname: values.lastname,
        phonenumber: values.phonenumber,
        firstline: values.firstline,
        secondline: values.secondline,
        email: values.email,
        city: values.city,
        additional: values.additional,
        totalprice: totalAllPrice,
        items: items,
      };
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        ),
      });
      onAddCustomerOrder(data);
      form.reset({
        firstname: "",
        lastname: "",
        phonenumber: "",
        firstline: "",
        secondline: "",
        email: "",
        city: "",
        additional: "",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return (
    <>
      <h1 className="my-3 font-display font-semibold text-4xl">
        {t("common.checkout")}
      </h1>
      <p>
        {t("checkout.thereare")} {totalQuantity} {t("checkout.productsincart")}
      </p>
      <div>
        <Form {...form}>
          <form
            dir={dir}
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {t("checkout.billing")}
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t("common.form.name")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t("common.form.lastname")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            dir={locale === "ar" ? "rtl" : "ltr"}
                            type="tel"
                            placeholder={t("common.form.phonenumber")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="firstline"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("checkout.address.firstline")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="secondline"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("checkout.address.secondline")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("common.form.email")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("common.form.city")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6 md:col-span-6">
                <FormField
                  control={form.control}
                  name="additional"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder={t("common.form.additional")}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="flex items-center justify-center shadow-md hover:shadow rounded-full border border-transparent bg-[#014F93] px-6 py-3 text-base font-medium text-white hover:bg-[#014780]"
              >
                {t("checkout.orders.confirm")}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
