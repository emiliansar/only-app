import style from '@/components/Block.module.scss'

export default function BlockTitle() {
    return (
        <div className={style.Block__Title}>
            <div className={style.Block__Title__Border}></div>
            <p className={style.Block__Title__Text}>
                Исторические даты
            </p>
        </div>
    )
}