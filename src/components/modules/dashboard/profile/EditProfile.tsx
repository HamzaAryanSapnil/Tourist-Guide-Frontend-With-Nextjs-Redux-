"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Validation schema
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  dob: z.string().optional(),
  address: z.string().optional(),
  division: z.string().optional(),
  city: z.string().optional(),
  bio: z.string().optional(),
  preferences: z.object({
    newsletter: z.boolean(),
    promotions: z.boolean(),
    smsAlerts: z.boolean(),
  }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

// Demo data (replace later with useGetProfileQuery)
const demoUser: ProfileFormValues = {
  name: "Rahim Ahmed",
  email: "rahim.ahmed@example.com",
  phone: "+8801712345678",
  dob: "1995-03-02",
  address: "House 12, Road 4, Gulshan",
  division: "Dhaka",
  city: "Dhaka",
  bio: "Traveler • Nature lover • Weekend explorer.",
  preferences: {
    newsletter: true,
    promotions: false,
    smsAlerts: true,
  },
};

export default function EditProfilePage() {
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: demoUser,
  });

  const onSubmit = (values: ProfileFormValues) => {
    console.log("Profile update submitted:", values);
    alert("Profile updated (demo)!");
    router.push("/dashboard/profile"); // go back to profile page
  };

  return (
    <main className="p-6 md:p-8 lg:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Edit Profile</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Update your account information and preferences.
          </p>
        </div>
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Left column */}
          <div className="space-y-6">
            <div className="p-6 bg-card border rounded-lg space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+880..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="p-6 bg-card border rounded-lg space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="division"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Division</FormLabel>
                      <FormControl>
                        <Input placeholder="Division" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="p-6 bg-card border rounded-lg space-y-4">
              <h3 className="font-medium">Preferences</h3>

              <FormField
                control={form.control}
                name="preferences.newsletter"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel>Email newsletter</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferences.promotions"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel>Promotional offers</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferences.smsAlerts"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel>SMS alerts</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="p-6 bg-card border rounded-lg">
              <h3 className="font-medium mb-4">Save changes</h3>
              <Button type="submit" className="w-full">
                Save profile
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </main>
  );
}
