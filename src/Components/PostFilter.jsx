import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.searchQuery}
        placeholder={"Поиск..."}
        onChange={(e) => {
          setFilter({ ...filter, searchQuery: e.target.value });
        }}
      />
      <MySelect
        onChange={(selectedSort) => setFilter({ ...filter, selectedSort })}
        defaultvalue={"Сортировать по"}
        value={filter.selectedSort}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
