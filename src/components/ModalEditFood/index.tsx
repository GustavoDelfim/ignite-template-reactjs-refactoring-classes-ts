import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { Food, FoodInput } from '../../pages/Dashboard';

interface ModalAddFoodProps {
  isOpen: boolean
  setIsOpen(): void
  handleUpdateFood(food: FoodInput): void
  editingFood: Food
}

export function ModalEditFood({ handleUpdateFood, isOpen, setIsOpen, editingFood }: ModalAddFoodProps) {
  const formRef = useRef(null)

  async function handleSubmit(data: FoodInput) {
    handleUpdateFood(data);
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
        initialData={editingFood}
      >
        <h1>Editar Prato</h1>

        <Input required name="image" placeholder="Cole o link aqui" />
        <Input required name="name" placeholder="Ex: Moda Italiana" />
        <Input required type="number" step="any" min={0} name="price" placeholder="Ex: 19.90" />
        <Input required name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};