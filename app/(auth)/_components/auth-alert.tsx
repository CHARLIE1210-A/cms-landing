import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface AuthAlertProps {
    type: "error" | "success";
    message: string;
}

export function AuthAlert({ type, message }: AuthAlertProps) {
    const isError = type === "error";

    return (
        <Alert
            variant={isError ? "destructive" : "default"}
            className={!isError ? "border-emerald-200 bg-emerald-50" : ""}
        >
            {isError ? (
                <AlertCircle className="h-4 w-4" />
            ) : (
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            )}

            <AlertTitle>
                {isError ? "Something went wrong" : "Success"}
            </AlertTitle>

            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}