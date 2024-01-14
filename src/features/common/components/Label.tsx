import React from 'react'

/**
 * 신규주문에서 사용될 label 공용 컴포넌트 props
 * @property {string} label
 * @property {string} label
 * @property {string} tooltip 툴팁
 * @property {string} className className
 * @property {string} labelClassName labelClassName
 * @property {string} validation validation 메시지
 * @property {boolean} required 필수입력 여부
 * @property {React.ReactNode} children label안에 들어갈 하위 요소
 * @property {React.ReactNode} labelChildren 타이틀영역에 들어갈 추가적인 요소들 (ex. 버튼)
 */
interface ILabelProps {
  required?: boolean
  label?: string
  tooltip?: string
  className?: string
  labelClassName?: string
  validation?: string
  children?: React.ReactNode
  labelChildren?: React.ReactNode
}

/**
 * 신규주문에서 사용될 label 공용 컴포넌트
 * @returns {JSX.Element}
 */
export default function Label({
  label,
  required,
  labelChildren,
  className,
  labelClassName,
  validation,
  children,
  tooltip,
}: ILabelProps) {
  return (
    <div className={`cc-common-label ${className}`}>
      <div className={`label ${labelClassName}`}>
        <div
          dangerouslySetInnerHTML={{
            __html: label,
          }}
        ></div>
        <span className='required'>{required && '*'}</span>
        {labelChildren}
      </div>

      {children}
      {validation && <p className='validation'>{validation}</p>}
    </div>
  )
}
