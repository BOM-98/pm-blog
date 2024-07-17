import Button from "../design/Button";

const Pagination = () => {
  return (
    <div className="flex flex-row justify-center md:justify-end gap-10">
      <Button textOnly secondary className="hover:text-orange-600 text-[var(--softTextColor)]">
        Back
      </Button>
      <Button primary>Next</Button>
    </div>
  );
};

export default Pagination;
