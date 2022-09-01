import { ReactNode, useContext, useEffect, useRef } from "react";
import { Children } from "react";
import { Container } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";
import { ModelTraining } from "@mui/icons-material";

interface IMakeDonationModalProps {
  children: ReactNode;
}

export const MakeDonationModal = ({ children }: IMakeDonationModalProps) => {
  const { setIsMakeDonationModal } = useContext(DonationContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsMakeDonationModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  });

  return (
    <Container>
      <div className="modal-make-donations" ref={modalRef}>
        {children}
      </div>
    </Container>
  );
};
