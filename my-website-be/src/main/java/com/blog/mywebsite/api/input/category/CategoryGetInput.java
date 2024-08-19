package com.blog.mywebsite.api.input.category;

import io.micrometer.common.lang.Nullable;
import jakarta.validation.constraints.Size;

import static com.blog.mywebsite.constant.ValidationConstant.*;

public record CategoryGetInput(
        @Nullable
        @Size(min = ID_MIN_LENGTH, max = ID_MAX_LENGTH, message = ID_SIZE_MESSAGE)
        String id,
        @Nullable
        @Size(min = ID_MIN_LENGTH, max = ID_MAX_LENGTH, message = CATEGORY_PARENT_ID_MESSAGE)
        String parentId,
        @Nullable
        @Size(min = CATEGORY_NAME_MIN_LENGTH, max = CATEGORY_NAME_MAX_LENGTH, message = CATEGORY_NAME_SIZE_MESSAGE)
        String name
){}