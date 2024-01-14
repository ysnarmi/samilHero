import classNames from 'classnames'
import React, { InputHTMLAttributes, useState } from 'react'
import Label from '../Label'

/**
 * input 공용 컴포넌트 props
 * @property {string} id input id
 * @property {string} label input label
 * @property {string} validation validation 메시지
 * @property {string} suffix input suffix
 * @property {boolean} required input 필수입력 여부
 * @property {boolean} disabled input disabled 여부
 * @property {string} className input className
 * @property {string} boxClassName input 컴포넌트내에 실제 box에 부여될 className
 * @property {function} onReset input 입력값 초기화 함수
 * @property {React.ReactNode} labelChildren 타이틀영역에 들어갈 추가적인 요소들 (ex. 버튼)
 */
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any
  id?: string
  required?: boolean
  disabled?: boolean
  className?: string
  boxClassName?: string
  inputClassName?: string
  labelClassName?: string
  suffix?: string
  label?: string
  validation?: string
  confirm?: string
  useReset?: boolean
  onReset?: () => void
  labelChildren?: React.ReactNode
  searchChildren?: React.ReactNode
  inputRef?: React.MutableRefObject<HTMLInputElement>
  handleFocusOut?: () => void
  onEnter?: () => void
}

/**
 * 신규주문에서 사용될 input 공용 컴포넌트
 * @returns {JSX.Element}
 */
const Input: React.FC<IInputProps> = React.forwardRef(
  (
    {
      id,
      label,
      validation,
      confirm,
      required,
      disabled,
      labelChildren,
      searchChildren,
      className,
      boxClassName = 'T56',
      inputClassName = '',
      labelClassName = '',
      suffix,
      useReset = true,
      onReset,
      inputRef,
      handleFocusOut,
      onEnter,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const [focused, setFocused] = useState<boolean>(false)

    /**
     * 취소아이콘 클릭시 실행되는 함수
     * @returns
     */
    const handleCancelTouchStart = (e: React.TouchEvent<SVGSVGElement> | React.MouseEvent<SVGSVGElement>) => {
      if (onReset) onReset()
      e.nativeEvent.stopImmediatePropagation()
    }

    const handleBlur = e => {
      e.stopPropagation()
      setFocused(false)
      if (handleFocusOut) {
        handleFocusOut()
      }
    }

    return (
      <div className={`cc-common-input ${className}`}>
        {/* 레이블 노출 영역 */}
        {label && (
          <Label label={label} required={required} labelChildren={labelChildren} labelClassName={labelClassName} />
        )}
        {/* input & 아이콘 노출 영역 */}
        <div
          className={classNames(`input ${boxClassName}`, {
            error: validation,
            focused: focused,
            disabled: disabled,
            number: rest.type === 'number',
          })}
          onBlur={handleBlur}
        >
          <input
            id={id}
            className={classNames(`w-full ${inputClassName}`, { required })}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={disabled}
            autoComplete='off'
            onKeyDown={e => {
              if (e.key === 'Enter') onEnter && onEnter()
            }}
            ref={inputRef}
            {...rest}
          />
          {/* suffix 노출 영역 */}
          {suffix && <div className='suffix'>{suffix}</div>}
        </div>
        {/* search input 사용 시 노출 영역 */}
        {searchChildren && <div>{searchChildren}</div>}
        {/* validation 노출 영역 */}
        {validation && <p className='validation'>{validation}</p>}
        {confirm && <p className='confirm'>{confirm}</p>}
      </div>
    )
  },
)

export default Input
