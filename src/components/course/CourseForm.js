import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput
              name = "title"
              lable = "Title"
              value = {course.title}
              onChange = {onChange}
              error = {errors.title}
              placeholder = "Enter title"
            />
            <SelectInput
              name = "authorId"
              lable="Author"
              value = {course.authorId}
              defaultOption="Select Author"
              options={allAuthors}
              onChange={onChange}
              error={errors.authorId}
            />
            <TextInput
               name="category"
               lable="category"
               value = {course.category}
               onChange={onChange}
               error={errors.category}
               placeholder="Enter Category"
            />
             <TextInput
               name="length"
               lable="Length"
               value = {course.length}
               onChange={onChange}
               error={errors.length}
               placeholder="Enter length"
            />
            <input
              type="submit"
              disabled = {saving}
              value = {saving ? 'Saving...':'Save'}
              className="btn btn-primary"
              onClick={onSave}
            />
        </form>
    );
};

CourseForm.propTypes = {
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors:  React.PropTypes.object,
    course: React.PropTypes.array
};

export default CourseForm;