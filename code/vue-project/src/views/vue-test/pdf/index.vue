<template>
  <div>
    <a :href="pdfUrl">pdf</a>
    pdf文件
    <div class="canvas-container" v-loading="loading">
      <div class="canvas-item" v-for="num in total" :key="num">
        <canvas :id="'js_canvas' + num"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import pdfjs from 'pdfjs-dist'
// 可以避免报这个未定义错误
// pdfjs.GlobalaWorkerOptions.workerSrc = 'pdfjs-dist/buld.pdf.worker.js'
export default {
  name: 'pdfjs',
  data () {
    return {
      pdfUrl: process.env.BASE_URL + '/光环云网福袋计划服务协议.pdf',
      total: 1,
      pdfDoc: null,
      scale: 1.5,
      pageRendering: false,
      pageNumPending: null,
      loading: true
    }
  },
  created () {
    this.renderPdf()
  },
  methods: {
    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    renderPage (num) {
      this.pageRendering = true
      // Using promise to fetch the page
      const canvas = document.getElementById('js_canvas' + num)
      const ctx = canvas.getContext('2d')
      this.pdfDoc.getPage(num).then(page => {
        var viewport = page.getViewport({ scale: this.scale })
        canvas.height = viewport.height
        canvas.width = viewport.width
        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        var renderTask = page.render(renderContext)
        // Wait for rendering to finish
        renderTask.promise.then(() => {
          this.pageRendering = false
          if (this.pageNumPending !== null) {
            // New page rendering is pending
            this.renderPage(this.pageNumPending)
            this.pageNumPending = null
          }
          if (num === this.total) this.loading = false
        })
      })
    },
    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    queueRenderPage (num) {
      if (this.pageRendering) {
        this.pageNumPending = num
      } else {
        this.renderPage(num)
      }
    },
    renderPdf () {
      /**
       * Asynchronously downloads PDF.
       */
      pdfjs.getDocument(this.pdfUrl).promise.then(pdfDoc => {
        this.pdfDoc = pdfDoc
        const total = pdfDoc.numPages
        this.total = total
        // Initial/first page rendering
        for (let num = 1; num <= total; num++) {
          this.$nextTick(() => {
            this.renderPage(num)
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.canvas-container {
  text-align: center;
  max-width: 1000px;
  padding: 20px;
  background-color: #666;
}
.canvas-item {
  min-height: 100px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
