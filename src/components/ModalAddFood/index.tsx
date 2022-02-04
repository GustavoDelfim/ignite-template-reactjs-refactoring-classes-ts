import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FoodInput } from '../../pages/Dashboard';
import { useRef } from 'react';

interface ModalAddFoodProps {
  isOpen: boolean
  setIsOpen(): void
  handleAddFood(food: FoodInput): void
}

export function ModalAddFood({ handleAddFood, isOpen, setIsOpen }: ModalAddFoodProps) {
  const formRef = useRef(null)
  
  async function handleSubmit(data: FoodInput) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h1>Novo Prato</h1>

        <Input required name="image" placeholder="Cole o link aqui" />
        <Input required name="name" placeholder="Ex: Moda Italiana" />
        <Input required type="number" step="any" min={0} name="price" placeholder="Ex: 19.90" />
        <Input required name="description" placeholder="Descrição" />
        
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};