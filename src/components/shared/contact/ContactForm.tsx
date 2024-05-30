"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormsPree, ValidationError } from "@formspree/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/Form";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Textarea } from "../../ui/Textarea";
import { FormValidator, FormValidatorType } from "@/validators/form";

const ContactForm: FC = () => {
  const router = useRouter();
  const [state, handleSubmit] = useFormsPree(
    process.env.NEXT_PUBLIC_FORMSPREE_API_KEY!,
  );

  const form = useForm<FormValidatorType>({
    resolver: zodResolver(FormValidator),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  if (state.succeeded) {
    router.push("/success");
  }

  const handleFormSubmit = (values: FormValidatorType) => {
    handleSubmit(values);
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. john@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={10}
                    placeholder="e.g. Hello there!"
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="xl">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
