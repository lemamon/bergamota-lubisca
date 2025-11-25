export interface ReservationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  qty: number;
}

export interface ReservationSubmitResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Submit reservation data to Google Sheets
 * Uses FormData format to avoid CORS preflight issues
 */
export const submitReservation = async (
  data: ReservationData
): Promise<ReservationSubmitResult> => {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  if (!url) {
    console.error("VITE_GOOGLE_SHEETS_URL not configured");
    return {
      success: false,
      message: "Configuração não encontrada",
      error: "Missing Google Sheets URL configuration",
    };
  }

  try {
    // Create FormData to avoid CORS preflight
    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("qty", data.qty.toString());

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevents CORS issues with Google Apps Script
    });

    // Note: With no-cors mode, we can't read the response
    // We assume success if no error was thrown
    return {
      success: true,
      message: "Reserva enviada com sucesso!",
    };
  } catch (error) {
    console.error("Error submitting reservation:", error);
    return {
      success: false,
      message: "Erro ao enviar reserva. Tente novamente.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
