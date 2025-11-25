import React from "react";
import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  StarDoodle,
  ScribbleLine,
  DiamondDivider,
} from "../shared/Decorations";
import { Section } from "../shared/Section";
import { PaperCard } from "../shared/PaperCard";

interface FormData {
  name: string;
  email: string;
  qty: number;
  date: string;
  obs: string;
}

interface ReservationFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent) => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  formData,
  setFormData,
  onSubmit,
}) => {
  const { t } = useTranslation();

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Section maxWidth="max-w-3xl">
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-purple rounded-full opacity-5 blur-xl"></div>
      <div className="absolute bottom-10 -right-10 w-40 h-40 bg-brand-orange rounded-full opacity-10 blur-xl"></div>

      <PaperCard innerClassName="py-10 px-6 md:px-12 bg-white/50">
        {/* Corner Decor */}
        <StarDoodle className="absolute top-4 left-4 w-6 h-6 text-brand-pink" />
        <StarDoodle className="absolute top-4 right-4 w-6 h-6 text-brand-orange" />

        <header className="text-center mb-10">
          <h2 className="font-sketch text-6xl text-brand-dark mb-2">
            {t("reservation.title")}
          </h2>
          <ScribbleLine />
          <p className="font-serif italic text-brand-purple mt-4 text-lg">
            {t("reservation.subtitle")}
          </p>
        </header>

        <form onSubmit={onSubmit} className="space-y-8 max-w-xl mx-auto w-full">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Name */}
            <div className="relative group">
              <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-1 uppercase">
                {t("reservation.form.yourName")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full bg-transparent border-b-2 border-brand-purple/30 focus:border-brand-pink outline-none py-2 font-sketch text-3xl text-brand-dark placeholder-brand-dark/20 transition-colors"
                placeholder={t("reservation.form.namePlaceholder")}
              />
              <StarDoodle className="absolute right-0 bottom-2 w-4 h-4 text-brand-orange opacity-0 group-focus-within:opacity-100 transition-opacity" />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-1 uppercase">
                  {t("reservation.form.email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-transparent border-b-2 border-brand-purple/30 focus:border-brand-pink outline-none py-2 font-sketch text-2xl text-brand-dark"
                  placeholder={t("reservation.form.emailPlaceholder")}
                />
              </div>
              <div className="relative group">
                <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-1 uppercase">
                  {t("reservation.form.whatsapp")}
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b-2 border-brand-purple/30 focus:border-brand-pink outline-none py-2 font-sketch text-2xl text-brand-dark"
                  placeholder={t("reservation.form.phone")}
                />
              </div>
            </div>

            {/* Date & Guests Row */}
            <div className="bg-brand-purple/5 p-6 rounded-lg border border-dashed border-brand-purple/20 flex flex-col md:flex-row gap-8 items-center justify-between">
              {/* Date Display */}
              <div className="flex items-center gap-3">
                <div className="bg-brand-purple text-brand-cream p-3 rounded-full">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-purple uppercase tracking-widest">
                    {t("reservation.form.date")}
                  </div>
                  <div className="font-sketch text-2xl text-brand-dark">
                    {t("reservation.form.dateValue")}
                  </div>
                  <div className="font-serif text-sm italic text-brand-pink">
                    {t("reservation.form.dateTime")}
                  </div>
                </div>
              </div>

              {/* Guests Counter */}
              <div className="flex items-center gap-4">
                <div className="text-right md:mr-2">
                  <div className="text-xs font-bold text-brand-purple uppercase tracking-widest">
                    {t("reservation.form.places")}
                  </div>
                  <div className="font-serif text-xs italic text-brand-dark/60">
                    {t("reservation.form.howMany")}
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-full border border-brand-purple">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        qty: Math.max(1, prev.qty - 1),
                      }))
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-purple/10 text-brand-purple font-bold text-xl"
                  >
                    -
                  </button>
                  <span className="font-sketch text-3xl w-6 text-center">
                    {formData.qty}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        qty: Math.min(10, prev.qty + 1),
                      }))
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-purple/10 text-brand-purple font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Dietary */}
            <div className="relative">
              <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-2 uppercase">
                {t("reservation.form.dietary")}
              </label>
              <textarea
                rows={2}
                value={formData.obs}
                onChange={(e) => handleInputChange("obs", e.target.value)}
                className="w-full bg-white/50 border-2 border-dashed border-brand-purple/30 focus:border-brand-pink outline-none p-4 rounded-lg font-serif italic text-brand-dark placeholder-brand-dark/30 resize-none transition-colors"
                placeholder={t("reservation.form.dietaryPlaceholder")}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="group relative inline-block focus:outline-none"
            >
              <span className="absolute inset-0 translate-x-1 translate-y-1 bg-brand-dark transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-full"></span>
              <span className="relative inline-block bg-brand-pink border-2 border-brand-dark px-12 py-3 rounded-full font-sketch text-3xl text-white uppercase tracking-widest transition-transform group-active:translate-y-1">
                {t("reservation.form.submit")}
              </span>
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <DiamondDivider />
          <p className="font-serif text-sm text-brand-dark/60 mt-4">
            {t("reservation.success.contactUs")} <br />
            <span className="text-brand-purple font-bold">
              {t("reservation.success.contactNumber")}
            </span>
          </p>
        </div>
      </PaperCard>
    </Section>
  );
};
