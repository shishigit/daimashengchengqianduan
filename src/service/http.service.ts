import {Injectable} from '@angular/core';
import {catchError} from "rxjs/operators";
import {
    httpjiekou_hongtian,
    httpjiekou_jjyts,
    httpjiekou_shujuyuan,
    httpjiekou_xitong,
    httpjiekou_zaxiang
} from "../qianhoutongyong/http.jiekou";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NzNotificationService} from "ng-zorro-antd";

@Injectable({
    providedIn: 'root'
})
export class HttpService
{
    private readonly houtai = '/houtai'

    constructor(
        private readonly httpClient: HttpClient,
        private readonly notification: NzNotificationService
    )
    {
    }

    private postForFile(url: string, body: any | null)
    {
        return this.httpClient
            .post(this.houtai + url, body, {
                observe: "response",
                responseType: "arraybuffer"
            })
            .pipe(this.catchError)
            .subscribe((value: HttpResponse<ArrayBuffer>) =>
            {
                let wenjianming = value.headers.get('content-disposition')
                if (!wenjianming)
                {
                    this.notification.info('提示', '请求异常')
                    return
                }
                let chazhao = wenjianming.match(/filename="(.*)"/)
                if (!chazhao)
                {
                    this.notification.info('提示', '请求异常')
                    return;
                }
                wenjianming = decodeURI(chazhao[1])

                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(new Blob([value.body as ArrayBuffer]));
                link.download = wenjianming
                link.click();
            })
    }

    private catchError = catchError<any, never>(err =>
    {
        if (err instanceof HttpErrorResponse)
        {
            if (err.error instanceof ArrayBuffer)
            {
                (err as any).error = new TextDecoder().decode(err.error)
            }

            if (err.status === 600)
            {
                this.notification.info('提示', err.error)
                throw err
            }
        }

        this.notification.error('提示', '请求异常')
        throw err
    })

    private postForJson<T>(url: string, body: any | null)
    {
        return this.httpClient
            .post<T>(this.houtai + url, body,
                {
                    observe: "body",
                    responseType: 'json'
                })
            .pipe<T>(this.catchError)
    }

    xitong_denglu(param: httpjiekou_xitong.denglu.Req)
    {
        return this.postForJson<httpjiekou_xitong.denglu.Res>('/xitong/denglu', param)
    }

    xitong_tuichu(param: httpjiekou_xitong.tuichu.Req)
    {
        return this.postForJson<httpjiekou_xitong.tuichu.Res>('/xitong/tuichu', param)
    }

    xitong_jingtaiwenjian(param: httpjiekou_xitong.jingtaiwenjian.Req)
    {
        return this.postForFile('/xitong/jingtaiwenjian', param)
    }

    shujuyuan_chaxun(param: httpjiekou_shujuyuan.chaxun.Req)
    {
        return this.postForJson<httpjiekou_shujuyuan.chaxun.Res[]>('/shujuyuan/chaxun', param)
    }

    shujuyuan_tianjia(param: httpjiekou_shujuyuan.tianjia.Req)
    {
        return this.postForJson<httpjiekou_shujuyuan.tianjia.Res>('/shujuyuan/tianjia', param)
    }

    shujuyuan_table(param: httpjiekou_shujuyuan.table.Req)
    {
        return this.postForJson<httpjiekou_shujuyuan.table.Res>('/shujuyuan/table', param)
    }

    shujuyuan_shanchu(param: httpjiekou_shujuyuan.shanchu.Req)
    {
        return this.postForJson<httpjiekou_shujuyuan.shanchu.Res>('/shujuyuan/shanchu', param)
    }

    shujuyuan_xialacaidan(param: httpjiekou_shujuyuan.xialacaidan.Req)
    {
        return this.postForJson<httpjiekou_shujuyuan.xialacaidan.Res[]>('/shujuyuan/xialacaidan', param)
    }

    zaxiang_shujukuleixing(param: httpjiekou_zaxiang.shujukuleixing.Req)
    {
        return this.postForJson<httpjiekou_zaxiang.shujukuleixing.Res>('/zaxiang/shujukuleixing', param)
    }

    hongtian_chaxun(param: httpjiekou_hongtian.chaxun.Req)
    {
        return this.postForJson<httpjiekou_hongtian.chaxun.Res[]>('/hongtian/chaxun', param)
    }

    jjyts_chaxun(param: httpjiekou_jjyts.chaxun.Req)
    {
        return this.postForJson<httpjiekou_jjyts.chaxun.Res[]>('/jjyts/chaxun', param)
    }

    hongtian_tianjia(param: httpjiekou_hongtian.tianjia.Req)
    {
        return this.postForJson<httpjiekou_hongtian.tianjia.Res>('/hongtian/tianjia', param)
    }

    jjyts_tianjia(param: httpjiekou_jjyts.tianjia.Req)
    {
        return this.postForJson<httpjiekou_jjyts.tianjia.Res>('/jjyts/tianjia', param)
    }

    hongtian_shanchu(param: httpjiekou_hongtian.shanchu.Req)
    {
        return this.postForJson<httpjiekou_hongtian.shanchu.Res>('/hongtian/shanchu', param)
    }

    jjyts_shanchu(param: httpjiekou_jjyts.shanchu.Req)
    {
        return this.postForJson<httpjiekou_jjyts.shanchu.Res>('/jjyts/shanchu', param)
    }

    hongtian_shengchengdaima(shengchengxinxi: httpjiekou_hongtian.shengchengdaima.req)
    {
        return this.postForFile('/hongtian/shengchengdaima', shengchengxinxi)
    }

    jjyts_shengchengdaima(shengchengxinxi: httpjiekou_jjyts.shengchengdaima.req)
    {
        return this.postForFile('/jjyts/shengchengdaima', shengchengxinxi)
    }

    jjyts_chuangjiankubiao(kubiaoxinxi: httpjiekou_jjyts.chuangjiankubiao.req)
    {
        return this.postForFile('/jjyts/chuangjiankubiao', kubiaoxinxi)
    }
}
