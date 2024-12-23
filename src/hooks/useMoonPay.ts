import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { processPaymentCallback } from '@/services/moonpay/moonpayService';

export const useMoonPay = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePaymentCallback = async (data: any) => {
    setIsProcessing(true);
    try {
      await processPaymentCallback(data);
      toast({
        title: "Success",
        description: "Payment processed successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    handlePaymentCallback,
  };
};