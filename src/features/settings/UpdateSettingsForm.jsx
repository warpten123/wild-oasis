import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useEditSettings } from "./useEditSetting";
import { useSettings } from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookLength,
      maxBookLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isEditing, editSetting } = useEditSettings();
  if (isLoading) return <Spinner />;

  function handleEdit(e, field) {
    const { value } = e.target;
    if (!value) return;
    editSetting({
      [field]: value,
    });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookLength}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, "minBookLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, "maxBookLength")}
          defaultValue={maxBookLength}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, "maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
