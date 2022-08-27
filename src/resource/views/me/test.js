document.addEventListener('DOMContentLoaded', () => {
	var courseId;
	var deleteForm = document.forms['delete-course-form'];
	var courseItemCheckbox = $('input[name="courseIds[]"]');
	var checkboxAll = $('#checkbox-all');
	var btnDeleteCourse = document.getElementById('btn-delete-course');
	var checkAllSubmitBtn = $('.check-all-submit-btn');
	var containerForm = document.forms['container-form'];

	$('#delete-course-modal').on('show.bs.modal', (e) => {
		var button = $(e.relatedTarget);
		courseId = button.data('id');
	});

	btnDeleteCourse.onclick = function () {
		deleteForm.action = `/courses/${courseId}?_method=DELETE`;
		deleteForm.submit();
	};

	checkboxAll.change(function () {
		var isCheckedAll = $(this).prop('checked');
		courseItemCheckbox.prop('checked', isCheckedAll);
		renderCheckAllSubmitBtn();
	});

	courseItemCheckbox.change(() => {
		var isCheckedAll =
			courseItemCheckbox.length ===
			$('input[name="courseIds[]"]:checked').length;
		checkboxAll.prop('checked', isCheckedAll);
		renderCheckAllSubmitBtn();
	});

	checkAllSubmitBtn.on('submit', (e) => {
		var isSubmittable = !$(this).hasClass('disabled');

		if (!isSubmittable) {
			e.preventDefault();
		}
	});

	function renderCheckAllSubmitBtn() {
		var checkedCount = $('input[name="courseIds[]"]:checked').length;
		if (checkedCount) {
			checkAllSubmitBtn.removeClass('disabled');
		} else {
			checkAllSubmitBtn.addClass('disabled');
		}
	}
});
