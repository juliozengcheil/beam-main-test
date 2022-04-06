import * as React from 'react'
import { Button } from '@/components/button'
import { ButtonLink } from '@/components/button-link'
import { MarkdownIcon } from '@/components/icons'
import MarkdownEditor from '@/components/markdown-editor/markdown-editor'
import { TextField } from '@/components/text-field'
import { useLeaveConfirm } from '@/lib/form'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { uploadFile } from '@/lib/uploadFile'

type FormData = {
  title: string
  content: string
  fileUrl?: string
}

type PostFormProps = {
  defaultValues?: FormData
  isSubmitting?: boolean
  backTo: string
  onSubmit: SubmitHandler<FormData>
}

export function PostForm({
  defaultValues,
  isSubmitting,
  backTo,
  onSubmit,
}: PostFormProps) {
  const { control, register, formState, getValues, reset, handleSubmit } =
    useForm<FormData>({
      defaultValues,
    })
  console.log(getValues())
  useLeaveConfirm({ formState })

  const { isSubmitSuccessful } = formState

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset(getValues())
    }
  }, [isSubmitSuccessful, reset, getValues])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6">
        <Controller
          name="fileUrl"
          control={control}
          rules={{ required: false }}
          render={({ field }) => {
            return (
              <label className="">
                <input
                  name="file"
                  type="file"
                  onChange={async (e) => {
                    const file = e.target.files![0]
                    const uploadedFile = await uploadFile(file)
                    field.onChange(uploadedFile.filePath)
                    return uploadedFile.url
                  }}
                />
              </label>
            )
          }}
        />
      </div>

      <TextField
        {...register('title', { required: true })}
        label="Title"
        autoFocus
        required
        className="text-lg font-semibold !py-1.5"
      />

      <div className="mt-6">
        <Controller
          name="content"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <MarkdownEditor
                label="Post"
                value={field.value}
                onChange={field.onChange}
                onTriggerSubmit={handleSubmit(onSubmit)}
                required
              />
            )
          }}
        />
      </div>

      <div className="flex items-center justify-between gap-4 mt-8">
        <div className="flex gap-4">
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingChildren={`${defaultValues ? 'Saving' : 'Publishing'}`}
          >
            {defaultValues?.title ? 'Save' : 'Publish'}
          </Button>
          <ButtonLink href={backTo} variant="secondary">
            Cancel
          </ButtonLink>
        </div>
        {!isSubmitting && (
          <a
            href="https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors text-secondary hover:text-blue"
          >
            <MarkdownIcon />
            <span className="text-xs">Markdown supported</span>
          </a>
        )}
      </div>
    </form>
  )
}
