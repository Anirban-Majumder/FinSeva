import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardBody, CardFooter } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { ecas, ECA } from "@/lib/data";

export default function DocsPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedECA, setSelectedECA] = useState<ECA | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleECAClick = (eca: ECA) => {
    setSelectedECA(eca);
    onOpen();
  };

  if (!mounted) {
    return null;
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Book an eCA</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-[95%] max-w-7xl">
          {ecas.map((eca) => (
            <Card 
              key={eca.id} 
              isPressable 
              onPress={() => handleECAClick(eca)}
              className="w-full min-h-64 p-4"
            >
              <CardBody className="gap-4">
                <h2 className="text-xl font-bold">{eca.name}</h2>
                <p className="text-lg">Fees: {eca.fees}</p>
                <p className="text-lg">Language: {eca.language}</p>
              </CardBody>
              <CardFooter>
                <Button color="primary" onPress={() => handleECAClick(eca)} size="lg">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{selectedECA?.name}</ModalHeader>
              <ModalBody>
                <p><strong>Description:</strong> {selectedECA?.description}</p>
                <p><strong>Language:</strong> {selectedECA?.language}</p>
                <p><strong>Fees:</strong> {selectedECA?.fees}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Book Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}